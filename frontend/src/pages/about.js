import styled from 'styled-components'

export default function AboutPage() {
  return (
    <Container>
      <Title>About</Title>
      <Text>Selendra is a multi-blockchain nominated proof-of-stake cryptographic system built to facilitate micro-economic transactions.</Text>
      <Text>It is designed to be interoperable with other open Blockchains and developable by developers and students with very minimal learning curve, and ease of use for end-users to interact and benefit from blockchain technology.</Text>
      <Text>Selendra represents a global network of organizations and individuals whose growth and stability are made possible through the deployment of value-added applications.</Text>
      <Text>Our mission is to empower young developers throughout the world to quickly and easily learn to create blockchain user-friendly applications for commerce, trade, education, entertainment, data storage, decentralized computing, asset tokenization, and much more.</Text>
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