import styled from 'styled-components';

const UserIconContainer = styled.div`
width: 32px;
height: 32px;

background: linear-gradient(90deg, #F27A54 0%, #A154F2 186.42%);
border-radius: 20px;
display:flex;
justify-content: center;
align-items: center;
padding:3px;
cursor: pointer;

img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}

:hover {
    background: #ffffff;
    border-radius: 0px;

}
`
const UserLinks = styled.div`
    top: 40px;
    background-color: #ffffff;
    position: absolute;
    width:15%;
    right:5%;
    z-index:1;

    a {
        margin:15px 10px;
        padding-left:20px;
        width: 100px;
        display: block;
        cursor: pointer;
        font-size: 14px;
        color: #3D3E3F;

        &:hover {
            color: #000000;
            font-weight: bold;
        }
    }
`
export {
    UserIconContainer,
    UserLinks
}