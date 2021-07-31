import styled from 'styled-components'

export default function FaqPage() {
  return (
    <Container>
      <Title>FAQs</Title>
      <SubTitle>Why SEL v2?</SubTitle>
      <Text>SEL v2 is an improvement to SEL v1.</Text>
      <Text>The second version adds mint and burn functions, which enables future cross-chains operation and public information onto the BSC network.</Text>
      <SubTitle>Why should I swap for SEL v2?</SubTitle>
      <Text>The SEL v1 that was airdropped in the first session won't be supported in future Selendra developments.</Text>
      <Text>All holders must swap to SEL v2 in order to grow with the network and token future value. </Text>
      <Text>The swap will be open till December 31st, 2021.</Text>
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
const SubTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #fff;
`
const Text = styled.p`
  color: #84879c;
  font-size: 16px;
`