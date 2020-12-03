import styled from 'styled-components';

export const Block = styled.div`
color: whitesmoke;
margin: auto;
min-height: 100vh;
/* height: ${props => props.mapZoom ? 'fit-content' : '100vh'}; */
width: 100%;
display: flex;  
justify-content: space-between;
padding: 2em;

@media(max-width: 1000px){
    flex-direction: column;
    width: 100%;
    padding: 1em;
    justify-content: space-evenly;
}
`;

export const Mapblock = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: ${props => props.mapZoom ? '100%' : '60%'};
@media(max-width: 1000px){
    width: 100%;
}
`;
export const Maptitle = styled.h1``;

export const MapSub = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

export const CtmMap = styled.img`
width: 100%;
`;
export const ZoomBtn = styled.div`
position: relative;
:hover{
    cursor: pointer;
    color: rgb(137 255 37);
}
@media(max-width: 1000px){
    display: none;
}
`;


export const DescriptionBlock= styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 40%;
@media(max-width: 1000px){
    width: 100%;
}
`;
export const Description = styled.p``;