import styled from 'styled-components';

const BannerContainer = styled.div`
    width:100%;
    height:400px;
    padding: 0 5%;
    background: #FFFFFF;
    background-image:url(${props => props.bgImage || "https://res.cloudinary.com/dxehksqg1/image/upload/v1576956180/confectioners/confectioner-banner1_ky1lzh.png"});
    background-size: cover;
    box-shadow: 0px 30px 40px rgba(0, 0, 0, 0.1);
    margin-bottom:18px;

    
    @media only screen 
    and (max-device-width: 570px) {
      height: 300px
  }
`;

const BannerTextHolder = styled.div `
    position: absolute;
    width: 360px;
    height: 400px;
    padding: 5%;
    background: rgba(255, 253, 253, 0.2);

    @media only screen 
    and (max-device-width: 570px) {
        padding: 5% 10%;
  }
`;

const BannerHeader = styled.h1`
    color: black;
    font-size: 24px;
    font-weight: bold;
    line-height: 32px;
    display: flex;
    align-items: center;
`;
const BannerText= styled.p`
    color: black;   
    font-size: 18px;
    line-height: 34px;
    display: flex;
    align-items: center;
`;

export {
    BannerContainer,
    BannerTextHolder,
    BannerHeader,
    BannerText,
}