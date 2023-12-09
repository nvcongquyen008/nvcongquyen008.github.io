import React from 'react'
import styled from 'styled-components'


const AboutStyled = styled.div`
    text-align: center;
    font-size: 25;
    font-weight: bold;
    font-family: "DM Sans";
    height: 50px;
    display: block;
`;
const AboutStyledElement = styled.p`
    color: firebrick;
`;
const About = () => {
  return (
    <div className="about-main" style={{height: '300px'}}>
        <div>
        <h1 style={{color: '#103574', textAlign: 'center', paddingTop: '80px'}}>CONTACT</h1>
        <AboutStyled>
            
            <AboutStyledElement style={{marginBottom: '0px', marginTop: '20px'}}><i class="fa-brands fa-facebook"></i>: <a style={{textDecoration: 'none', color: 'firebrick'}} href='https://www.facebook.com/nvCongQuyen08/'>NV Cong Quyen</a></AboutStyledElement>
            <AboutStyledElement style={{marginBottom: '0px'}}><i class="fa-regular fa-envelope"></i>: congquyennv123@gmail.com</AboutStyledElement>
            <AboutStyledElement><i class="fa-solid fa-phone"></i>: 0363768542</AboutStyledElement>
        </AboutStyled>
    </div>
    </div>
  )
}

export default About;
