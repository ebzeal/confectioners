import styled from 'styled-components';

const FooterContainer = styled.div`
    margin-top:20px;
    padding: 5%;
    background: #3C444C;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-grow: 1;

    font-size: 12px;

    @media only screen 
    and (max-device-width: 570px) {
    display: block;
    content-align: center

  }
`;

const BoxOne = styled.div`
    flex: 0 0 35%;

    p {
        color:#ffffff;
        margin:30px 50% 0px 0px;
    }
`;

const FooterBox = styled.div`
        text-transform: capitalize;
    h1 {
        font-family: 'Lato', sans-serif;
        color:#ffffff;
        font-weight:bold;
        font-size: 15px;
    };

    li {
        list-style-type: none;
        color: #CBCFD4;
        font-weight:light;
        margin: 10px 0px 10px -40px;
    };

    i {
        font-size: 15px;
        color: #F27A54;
    }
`;


export {
    FooterContainer,
    BoxOne,
    FooterBox
}