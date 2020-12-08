import styled from 'styled-components';

export const Block = styled.div`
color: whitesmoke;
margin: auto;
height: fit-content;
width: 90%;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 2em;

@media(max-width: 1000px){
    flex-direction: column;
    width: 100%;
    padding: 1em;
}
`;
export const AboutSection = styled.div``;
export const Title = styled.h1``;
export const Statement = styled.p``;

export const ViewDocBtn = styled.button`
height: 3em;
background: white;
border: none;
box-shadow: 2px 3px 10px black;
:hover{
    color: white;
    background: grey;
}
`;
export const RightButton = styled.button`
position: relative;
left: 80%;
`;
export const LeftButton = styled.button``;