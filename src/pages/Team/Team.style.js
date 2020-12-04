import styled from 'styled-components';

export const Block = styled.div`
color: whitesmoke;
margin: auto;
height: fit-content;
width: 60%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
padding: 1em;

@media(max-width: 1000px){
    width: 100%;
    padding: 1em;
}
`;
