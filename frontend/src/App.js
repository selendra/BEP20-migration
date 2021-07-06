import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { Button, Input, Form, message } from 'antd';
import styled from 'styled-components';
import contract from './contract/contract.json';

export default function App() {
  const [amount, setAmount] = useState('');
  const SwapContractAddress = "0x54419268c31678C31e94dB494C509193d7d2BB5D";
  const SwapContractABI = contract;

  let SwapContract; 
  let signer;

  useEffect(async() => {
    if(window.ethereum) {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
    } else {
      message.error("Metamask not detected!!")
    }
  }, []);

  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    provider.listAccounts()
    .then(function(accounts) {
      signer = provider.getSigner(accounts[0]);
      SwapContract = new ethers.Contract(
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
    if(!amount) return message.error("Input the amount!!")
    try {
      let SwapContract = new ethers.Contract(
        SwapContractAddress,
        SwapContractABI,
        signer
      );
      console.log("Start Swapping Amount: ", amount); 
      await SwapContract.swap(ethers.utils.parseUnits(amount, 18));
    } catch (error) {
      // console.error(error);
      try {
        const lowAllowance = "execution reverted: Old Token allowance too low";
        if(error.data.message === lowAllowance) approve();
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <Home>
      <Container>
        <Title>Swap</Title>
        <CardStyled>
          <CardBody>
            <Form layout="vertical" color="white">
              <FormItem label='Amount'>
                <InputStyled placeholder="0.00" value={amount} onChange={(e) => setAmount(e.target.value)} />
              </FormItem>
            </Form>
            <ButtonSwap type='ghost' onClick={swap}>Swap</ButtonSwap>
            <ButtonSwap type='ghost' onClick={approve}>Approve</ButtonSwap>
          </CardBody>
        </CardStyled>
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
  color: #fff;
  font-weight: 800;
  margin-top: 20px;
  margin-bottom: 40px;
`
const CardStyled = styled.div`
  background: linear-gradient(245.22deg,#c200fb 7.97%,#3772ff 49.17%,#3773fe 0,#5ac4be 92.1%);
  border-radius: 4px;
  border: 0.1px solid;
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