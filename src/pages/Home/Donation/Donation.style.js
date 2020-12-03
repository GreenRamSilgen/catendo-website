import styled from 'styled-components';

export const Block = styled.div`
color: black;
background-color: #ececec;
margin: auto;
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
box-shadow: 0px 0px 10px black;

@media(max-width: 1000px){

    width: 100%;
}
`;


export const Titleholder = styled.div`
height: 20%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;
export const Title = styled.h1``;

export const Cardholder = styled.div`
height: 80%;
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
@media(max-width: 1000px){
    flex-direction: column;
    justify-content: space-evenly;
    align-items: space-evenly;
}
`;