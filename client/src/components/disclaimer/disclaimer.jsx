import React from 'react';

import DisclaimerContainer from './disclaimer.styles'

const Disclaimer = ({color, topMargin, bottomMargin}) => (
    <DisclaimerContainer color={color} topMargin={topMargin} bottomMargin={bottomMargin}>
        Disclaimer: Please note that every information on this site is solely for academic and portfolio purposes. The names, addresses, shops, vendors, images and all are not real and should not be used for any form of transaction on this site
    </DisclaimerContainer>

); 
export default Disclaimer;