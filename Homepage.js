import React from 'react';
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';
import { animateScroll } from 'react-scroll';

const HomepageStyled = styled.div`
    text-align: center;
    margin-top: 50px;
    height: 550px;
`;

const Homepage = () => {
    const options = {
        duration: 100,
        smooth: true,
    };
    return (
        <HomepageStyled>
            <div>
                <div>
                    <img style={{width: '400px', height: 'auto'}} src='https://img.freepik.com/free-vector/diverse-people-discussing-business-plan_1308-127985.jpg?w=826&t=st=1702114384~exp=1702114984~hmac=a74904b27a14e0b55f9aaa9cfbc5e70bb42e730d685867d70286ad713bd39bb3' alt=''/>
                </div>
                <div style={{marginTop: '15px'}}>
                    <h1 style={{fontSize: 30, color: 'firebrick', fontFamily: 'DM Sans'}}>Welcome to <b style={{color: 'blueviolet'}}>my-website</b></h1>
                </div>
                <div style={{marginTop: '20px'}}>
                <Button variant="outline-primary" onClick={() => animateScroll.scrollTo(700, options)}>Getting Started</Button>{' '}
                <Button style={{marginLeft: '5px'} } onClick={() => animateScroll.scrollTo(700, options)} variant="success"><i class="fa-solid fa-eye"></i> Watch video</Button>{' '}
                </div>
            </div>
        </HomepageStyled>
    );
};
export default Homepage;