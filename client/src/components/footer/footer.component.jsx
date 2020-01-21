import React from 'react'

import { ReactComponent as Logo } from "../../assets/confectioners.svg";
import Disclaimer from '../disclaimer/disclaimer';


import {FooterContainer, BoxOne, FooterBox} from './footer.styles';

const Footer = () => (
    <FooterContainer>
        <BoxOne>
        <Logo className="logo" />
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus egestas elit, at eleifend elit ornare ut.
        </p>
        </BoxOne>
        <FooterBox>
            <h1>Company</h1>
            <ul>
                <li> About Us </li>
                <li> Our Services </li>
                <li> The Team </li>
                <li> Investors </li>
            </ul>
        </FooterBox>

        <FooterBox>
            <h1>Resources</h1>
            <ul>
                <li> News &nbsp; Insight </li>
                <li> Documentation </li>
                <li> Downloads </li>
                <li> Knowledge Base </li>
            </ul>
        </FooterBox>

        <FooterBox>
            <h1>Support</h1>
            <ul>
                <li> Contact Us </li>
                <li> FAQs </li>
                <li> Live Chat </li>
            </ul>
        </FooterBox>

        <FooterBox>
            <h1>Resources</h1>
            <ul>
                <li> <i class="fab fa-twitter"></i> Twitter </li>
                <li> <i class="fab fa-facebook-square"></i> Facebook </li>
            </ul>
        </FooterBox>
        
        <Disclaimer  color='#ffffff' topMargin='40px' bottomMargin='0px' />

    </FooterContainer>
);


export default Footer;

