import styled from 'styled-components';

const SectionHead = styled.div`
    width:100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: baseline;
    margin:20px 0;
`;

const HeaderText = styled.h1`
    color:#3D3E3F;
    font-weight: bolder;
    font-size: 24px;
    line-height: 32px;
    
`;

const LinksText = styled.i`
    color: #A154F2;
    font-family: Lato;
    font-style: italic;
    font-weight: 500;
    font-size: 18px;
    cursor:pointer;

    :hover {
        color: #F27A54
    }
    
    @media only screen 
    and (max-device-width: 570px) {
    font-size: 14px;
  }
`;

export {
    SectionHead,
    HeaderText,
    LinksText
}