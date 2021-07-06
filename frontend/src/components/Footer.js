import styled from 'styled-components';
import { Row, Col } from 'antd';
import selendra from '../assets/sel-logo.png';
import { ReactComponent as Facebook } from '../assets/facebook.svg';
import { ReactComponent as Twitter } from '../assets/twitter.svg';
import { ReactComponent as Linkedin } from '../assets/linkedin.svg';
import { ReactComponent as Medium } from '../assets/medium.svg';
import { ReactComponent as Telegram } from '../assets/telegram.svg';

export default function FooterComponent() {
  return (
    <div>
      <SeparateLine />
      <Footer>
        <Row>
          <Col span={12}>
            <FooterLogo src={selendra} alt='selendra' />
          </Col>
          <Col span={12}>
            <Row justify='space-around' align='middle' style={{height: '100%'}}>
              <a href='https://www.facebook.com/selendraio'>
                <Facebook />
              </a>
              <a href='https://twitter.com/selendraorg'>
                <Twitter />
              </a>
              <a href='https://www.linkedin.com/company/selendra'>
                <Linkedin />
              </a>
              <a href='https://medium.com/selendra'>
                <Medium />
              </a>
              <a href='https://t.me/selendraorg'>
                <Telegram />
              </a>
            </Row>
          </Col>
        </Row>
      </Footer>
    </div>
  )
}

const Footer = styled.div`
  max-width: 1216px;
  height: 80px;
  margin: 0 auto;
  padding: 24px 50px;
  color: #FFF;
  font-size: 14px;
  background: #131a35;
`
const FooterLogo = styled.img`
  height: 44px;
  width: auto;
`
const SeparateLine = styled.div`
  height: 1px; 
  background: rgba(0, 0, 0, 0) linear-gradient(90deg, rgba(90, 196, 190, 0) 0%, rgb(55, 114, 255) 50%, rgba(194, 0, 251, 0) 100%) repeat scroll 0% 0%;
`