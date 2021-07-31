import styled from 'styled-components'
import bnbamount from '../assets/bnbamount.png'

export default function HowtoPage() {
  return (
    <Container>
      <Title>How to swap?</Title>
      <Text>First, you must have a small amount of BNB for the operation to take place.<br/>Make sure you are connected to Binance Smart Chain network.</Text>
      <Text>Here is how to connect to Binance Smart Chain network:</Text>
      <div style={{paddingLeft: '16px'}}>
        <Text>Click on Add Network at the top-right corner and manually fill in with the informations as listed below.</Text>
        <Text>
          - Network Name: Binance Smart Chain <br/>
          - New RPC URL: https://bsc-dataseed.binance.org <br/>
          - ChainID: 56 <br/>
          - Symbol: BNB <br/>
          - Block Explorer URL: https://bscscan.com
        </Text>
      </div>
      <img src={bnbamount} alt='bnb' width='320' style={{borderRadius: '4px', marginBottom: '1em'}} />
      <Text>Second, swap the token via <a href='https://swap.selendra.org'>swap.selendra.org</a> or directly via <a href='https://play.google.com/store/apps/details?id=com.selendra.secure_wallet&hl=en&gl=US'>Bitriel mobile app.</a></Text>
      <Text>We will release a video tutorial for this swap soon. Stay tuned via <a href='https://t.me/selendraorg'>t.me/selendraorg</a></Text>
    </Container>
  )
}

const Container = styled.div`
  max-width: 450px;
  min-height: calc(100vh - 146px);  
  margin: 0 auto;
  padding: 24px;
`
const Title = styled.h1`
  color: #f1f1f2;
  font-weight: 600;
`
const Text = styled.p`
  color: #84879c;
  font-size: 16px;
`