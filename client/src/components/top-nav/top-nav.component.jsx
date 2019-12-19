import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {TopNavContainer, MenuContainer, ProfileLoginContainer, MenuLink} from './top-nav.styles'
import  UserIcon from './user-icon/user-icon.component';

import {selectCurrentUser} from '../../redux/user/user.selector'


const TopNav = ({currentUser}) => (
    <TopNavContainer>
        <MenuContainer>
      <MenuLink to='/'>Home</MenuLink>
      <MenuLink to='/about'>About Us</MenuLink>
      <MenuLink to='/blog' >Blog</MenuLink>  
      <MenuLink to='/contact' >Contact Us</MenuLink>
      </MenuContainer>
      <ProfileLoginContainer>
          {currentUser ? (
                  <>
                  <p>Hi {currentUser.displayName}</p> <UserIcon currentUser={currentUser} />
                  </>
              ) : (
                <MenuLink to='/signin'>Login/Signup</MenuLink>
          )
          }
      </ProfileLoginContainer>
    </TopNavContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
})

export default connect(mapStateToProps)(TopNav);