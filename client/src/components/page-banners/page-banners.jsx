import React from 'react';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';

import {BannerContainer,
    BannerTextHolder,
    BannerHeader,
    BannerText
} from './page-banners.styles';

const buttonStyle = {
    marginTop:'30%'
}

const PageBanner = ({ bgImage, history}) => (
    <BannerContainer bgImage={bgImage} >
        <BannerTextHolder>
            <BannerHeader >Today's Trending</BannerHeader>
            <BannerText>Cakes for the season at the lowest prices</BannerText>
            <CustomButton style={buttonStyle} onClick={()=> history.push('/shop')}>Shop now</CustomButton>
        </BannerTextHolder>
    </BannerContainer>
)

export default withRouter(PageBanner);