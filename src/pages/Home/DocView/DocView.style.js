import styled from 'styled-components';

export const Block = styled.div`
margin: auto;
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 2em;
background-color: white;
@media(max-width: 1000px){
    flex-direction: column;
    width: 100%;
    padding: 1em;
}
`;


export const InfoSection = styled.div``;
export const Title = styled.h1``;
export const Statement = styled.p``;


export const ViewDocBtn = styled.button`
height: 3em;
background: white;
border: none;
border-radius: 5px;
box-shadow: 1px 1px 10px black;
width: 50%;

:hover{
    color: white;
    background: grey;
}
`;

export const TemplateBtn = styled.button`
    border: none;
    border-radius: 20%;
    background-color: rgb(70,70,70,0.5);
    :hover{
        background-color: rgb(77,77,77,0.8);
    }
`;
export const RightButton = styled(TemplateBtn)`
position: relative;
left: 80%;
`;
export const LeftButton = styled(TemplateBtn)``;