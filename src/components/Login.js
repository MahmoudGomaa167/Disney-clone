import React from 'react'
import styled from 'styled-components'
import LogoOne from '../images/cta-logo-one.svg';
import LogoTwo from '../images/cta-logo-two.png';
import BackgroundImage from '../images/login-background.jpg'

const Login = () => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src={LogoOne} />
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>Get Premiere Access to Raya and the Last Dragon for an additional fee with a Disney + subscription. As of 03/26/2021, the price of Disney + and The Disney Bundle will increase by $1.</Description>
                    <CTALogoTwo src={LogoTwo} />
                </CTA>
                <BgImage />
            </Content>
        </Container>
    )
}

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh
`;
const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
    
`;

const BgImage = styled.div`
    background-image: url(${BackgroundImage});
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
`

const CTA = styled.div`
    margin: 0 auto 2vw;
    max-width: 650px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    display: block;
    width: 100%;
    min-height: 1px
`

const SignUp = styled.a`
    font-weight: bold;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;
    transition: background-color 0.2s ease-in-out;
    &:hover{
        background-color: #0483ee;
    }
`

const Description = styled.p`
    color: hsla(0, 0%, 95.3%, 1.0);
    font-size: 11px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;
    width: 100%;
`

const CTALogoTwo = styled.img`
    max-width: 600px;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
`

export default Login
