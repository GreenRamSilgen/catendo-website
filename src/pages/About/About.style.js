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