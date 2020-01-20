import React from 'react'
import {Link} from 'react-router-dom'

import {
    SectionHead,
    HeaderText,
    LinksText
} from './section-heading.styles';

const SectionHeading = ({heading, sideLinks, linkedPage}) => {
    
    return(
        <SectionHead>
            <HeaderText> {heading} </HeaderText>

            <Link to={`/${linkedPage}`}><LinksText> {sideLinks}</LinksText></Link>
        </SectionHead>
    )
}

export default SectionHeading;