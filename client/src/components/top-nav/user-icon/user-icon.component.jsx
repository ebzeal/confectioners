import React, { useState } from 'react';
import {connect} from 'react-redux';

import { signOutStart } from "../../../redux/user/user.actions";

import {UserIconContainer, UserLinks} from './user-icon.styles'

const UserIcon = ({image, userSignOut}) => {

    const [userLinks, setUserLinks] = useState(false);
    
    return (
    <UserIconContainer onMouseEnter={() => setUserLinks(true)} onMouseLeave={() => setUserLinks(false)}>
       <img src={image ? image : "https://res.cloudinary.com/dxehksqg1/image/upload/v1575664489/icon_by3ywb.jpg"} alt="user profile" />
        { userLinks ? 
        <UserLinks>
            <a>My profile</a>
            <a>My Account</a>
            <a>My Cart</a>
            <a onClick={userSignOut}>Logout</a>
        </UserLinks> : '' }
    </UserIconContainer>
)}

const mapDispatchToProps = dispatch => ({
    userSignOut: () => dispatch(signOutStart())
  });

export default connect(null, mapDispatchToProps)(UserIcon);