import React, { useState } from 'react'

import {UserIconContainer, UserLinks} from './user-icon.styles'

const UserIcon = ({image}) => {

    const [userLinks, setUserLinks] = useState(false);
    
    return (
    <UserIconContainer onMouseEnter={() => setUserLinks(true)} onMouseLeave={() => setUserLinks(false)}>
       <img src={image ? image : "https://res.cloudinary.com/dxehksqg1/image/upload/v1575664489/icon_by3ywb.jpg"} alt="user profile" />
        { userLinks ? 
        <UserLinks>
            <a>My profile</a>
            <a>My Account</a>
            <a>My Cart</a>
            <a>Logout</a>
        </UserLinks> : '' }
    </UserIconContainer>
)}

export default UserIcon;