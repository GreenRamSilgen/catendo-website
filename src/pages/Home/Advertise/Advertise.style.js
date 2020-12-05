import styled from 'styled-components';

export const Block = styled.div`
color: whitesmoke;
margin: auto;
height: 100vh;
width: 90%;
display: flex;
justify-content: space-between;
padding: 2em;

@media(max-width: 1000px){
    flex-direction: column;
    width: 100%;
    padding: 1em;
}
`;

export  const Hooker = styled.div`
width: 40%;
@media(max-width: 1000px){
    height: 50%;
    width: 100%;
}
`;

export const Title = styled.h1``;

export const AdImg = styled.img`
height: 80%;
`;

export const Seller = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

width: 60%;
@media(max-width: 1000px){
    height: 50%;
    width: 100%;
}
`;


export const Pitch = styled.h4`
width: 90%;
margin: auto;
`;