import styled from 'styled-components';
import {Link} from 'react-router-dom';

const TopNavContainer = styled.div`
    width: 100%;
    height: 53.82px;
    background: rgba(60, 68, 76, .57);
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 10px 5%;
    `
    
const MenuContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    width:20%;
`
    
const ProfileLoginContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    color: #fff;
    font-size:12px;

    p {
        margin-right:10px;
    }
`
const MenuLink = styled(Link)`
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    cursor: pointer;
    color: #FFFFFF;

    :hover {
        color: rgba(242, 122, 84, 1)
    }
`


export {
    TopNavContainer,
    MenuLink,
    MenuContainer,
    ProfileLoginContainer
}



