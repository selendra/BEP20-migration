import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { Button, Input, Form, message, Modal, Row } from 'antd';
import styled from 'styled-components';
import swapContract from '../contract/swapContract.json';
import { ContractInstance } from '../utils/useContract';

export default function HomePage() {
  const modalCustom = {
    background: "#131a35",
    borderRadius: "4px"
  }
  const [amount, setAmount] = useState('');
  const [modal, setModal] = useState(false);
  const [modalConfirm, setModalConfirm] = useState(false);
  const [balance, setBalance] = useState('');
  const [allowance, setAllowance] = useState('');
  const SwapContractAddress = "0x54419268c31678C31e94dB494C509193d7d2BB5D";
  const SwapContractABI = swapContract;

  let signer;
  if(window.ethereum) {
    window.ethereum.on('chainChanged', (_chainId) => window.location.reload());
    window.ethereum.on('accountsChanged', (accounts) => window.location.reload());
  }

  useEffect(() => {
    async function Validate() {
      if(window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' }).then(accounts => {
          getBepTokenBalance(accounts[0]);
        });
        await window.ethereum.request({ method: 'eth_chainId' }).then(chainId => {
          if(chainId !== '0x38') setModal(true);
        })
      } else {
        message.error("Metamask not detected!!")
      }
    }
    Validate();
  }, []);

  const getBepTokenBalance = async(fromAddress) => {
    let contract = ContractInstance();
    let decimal = await contract.methods.decimals().call();
    let balance = await contract.methods.balanceOf(fromAddress).call();
    let allowance = await contract.methods.allowance(fromAddress, SwapContractAddress).call();
    setAllowance(allowance / Math.pow(10, decimal));
    setBalance(balance / Math.pow(10, decimal));
  }

  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    provider.listAccounts()
    .then(function(accounts) {
      signer = provider.getSigner(accounts[0]);
      new ethers.Contract(
        SwapContractAddress,
        SwapContractABI,
        signer
      );
    });
  } catch (error) {
    console.log(error);
  }

  async function approve() {
    try {
      let abi = [
        "function approve(address _spender, uint256 _value) public returns (bool success)",
      ];
      //Old ERC20 Contract: 0x288d3A87a87C284Ed685E0490E5C4cC0883a060a 
      let TokenContract = new ethers.Contract(
        "0x288d3A87a87C284Ed685E0490E5C4cC0883a060a",
        abi,
        signer
      );
      // Approve Spending from Swap contract
      await TokenContract.approve(
        SwapContractAddress,
        ethers.utils.parseUnits(Math.pow(10, 18).toString(), 18)
      );
      console.log("Approving Old Sel contract to spend");
    } catch (error) {
      console.log(error);
    }
  }

  async function swap() {
    try {
      let SwapContract = new ethers.Contract(
        SwapContractAddress,
        SwapContractABI,
        signer
      );
      console.log("Start Swapping Amount: ", amount); 
      await SwapContract.swap(ethers.utils.parseUnits(amount, 18));
    } catch (error) {
      console.log(error);
    }
  }

  function handleSwap() {
    if(!amount) return message.error("Input the amount!!");
    if(!allowance){
      message.error("Please approve to be able to swap!!");
      return approve();
    } 
    setModalConfirm(true);
  }

  return (
    <Home>
      <Container>
        <Modal
          visible={modal}
          footer=""
          title=""
          bodyStyle={modalCustom}
        >
          <Title>Alert!</Title>
          <Subtitle>You are connect to another network, Please switch to Binance Smart Chain network</Subtitle>
          <ButtonSwap type='ghost' onClick={() => setModal(false)}>Confirm</ButtonSwap>
        </Modal>
        <Modal
          visible={modalConfirm}
          footer=""
          title=""
          bodyStyle={modalCustom}
          onCancel={()=>setModalConfirm(false)}
        >
          <Row justify='center'>
            <div style={{textAlign: 'center'}}>
              <Title>Swaping</Title>
              <Row align='middle'>
                <CardStyled>
                  <CardBody>
                    <Subtitle>SEL v1 ➡️ SEL v2</Subtitle>
                    <Text>{amount} of SEL</Text>
                  </CardBody>
                </CardStyled>
              </Row>
              <br/>
              <ButtonSwap type='ghost' onClick={swap}>Confirm</ButtonSwap>
            </div>
          </Row>
        </Modal>
        <Title>Upgrade SEL v2</Title>
        <CardStyled>
          <CardBody>
            <Form layout="vertical" color="white">
              <FormItem label='Amount'>
                <InputStyled placeholder="0.00" addonAfter={`Max: ${balance}`} value={amount} onChange={(e) => setAmount(e.target.value)} />
              </FormItem>
            </Form>
            <ButtonSwap type='ghost' onClick={handleSwap}>Swap</ButtonSwap>
          </CardBody>
        </CardStyled>
        <br/>
        <Subtitle>SEL Token v2 Feature:</Subtitle>
        <p>Token contract verification and other related information to SEL token v2, all available on BSCscan like Whitepaper, Social Channels and other official info.</p>
        <p>🚀 For future cross-chains transaction; this version is designed to work with others chains like Polygon, Ethereum and other networks.</p>
        <p>🚀 Use the Token to purchase invitations and share the referral link to join Selendra airdrop opportunity.</p>
      </Container>
    </Home>
  );
}

const Home = styled.div`
  width: 100vw;
  min-height: calc(100vh - 146px);  
`
const Container = styled.div`
  max-width: 450px;
  margin: 0 auto;
  padding: 24px;
`
const Title = styled.h1`
  text-align: center;
  color: #fff;
  font-weight: 800;
  margin-top: 20px;
  margin-bottom: 40px;
`
const CardStyled = styled.div`
  background: linear-gradient(245.22deg,#c200fb 7.97%,#3772ff 49.17%,#3773fe 0,#5ac4be 92.1%);
  border-radius: 4px;
  padding: 1px;
`
const CardBody = styled.div`
  background-color: #131a35;
  opacity: .9;
  padding: 24px;
  border-radius: 4px ;
`
const FormItem = styled(Form.Item)`
  background: #000829;
  border-radius: 4px;
  label {
    font-weight: 700;
    color: #85858D;  
    padding: 10px 15px;
  }
`
const InputStyled = styled(Input)`
  font-size: 20px;
  font-weight: 800;
  color: #FFF;
  background: #000829;
  border-radius: 4px;
  border: none;
  padding: .75rem .75rem .75rem 1rem;
  &:focus {
    box-shadow: none!important;
  }
`
const ButtonSwap = styled(Button)`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  color: #fff;
  border: 1px solid #82d1ca;
  margin: 10px 0;
  &:hover {
    border: 1px solid #82d1ca;
    color: #82d1ca;
  }
`
const Subtitle = styled.h2`
  color: #FFF;
  font-weight: 600;
`
const Text = styled.p`
  color: #FFF;
  font-weight:600;
  font-size: 18px;
  margin: 0;
`