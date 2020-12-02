import styled from 'styled-components';

export const Card = styled.div`
height: 80%;
width: 25%;
border-radius: 10px;
box-shadow: 0px 0px 5px black;
@media(max-width: 1000px){
    display: flex;
    width: 90%;
    height: 30%
}
`;

export const Tophalf = styled.div`
color: white;
background:linear-gradient(135deg, #13f1fc 0%,#0470dc 100%);
width: 100%;
height: 80%;
border-radius: 10px 10px 0px 0px;
display: flex;
justify-content: center;
align-items: center;
@media(max-width: 1000px){
    height: 100%;
    width: 60%;
    border-radius: 10px 0px 0px 10px;
}
`;
export const Price = styled.h1`
font-size: 50px;
`;


export const Bottomhalf = styled.div`
background-color: white;
width: 100%;
height: 20%;
border-radius:  0px 0px 10px 10px;

@media(max-width: 1000px){
    height: 100%;
    width: 40%;
    background: white;
    border-radius: 0px 10px 10px 0px;
}
`;
export const TierName = styled.h1``;
