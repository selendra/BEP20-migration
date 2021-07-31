import styled from 'styled-components';
import { Row } from 'antd';
import { NavLink } from 'react-router-dom';
import selendra from '../assets/sel-logo.png'

export default function HeaderComponent() {
  return (
    <Header>
      <Row justify='center' align='middle' style={{height: '100%'}}>
        <NavLink to='/'>
          <HeaderLogo src={selendra} alt='selendra' />
        </NavLink>
      </Row>
    </Header>
  )
}

const Header = styled.div`
  width: 100vw;
  height: 64px;
  background: #131a35;
  border-bottom: 2px solid #1c274f;
`
const HeaderLogo = styled.img`
  height: 44px;
  width: auto;
`