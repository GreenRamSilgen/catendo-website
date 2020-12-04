import styled from 'styled-components';

export const MemberBlock = styled.div`
height: 15%;
width: 90%;
border-bottom: 2px solid black;
display: flex;
margin-bottom: 2em;
:nth-child(odd){
    flex-direction: row-reverse;
    border-right: 2px solid black;
    box-shadow: 2px 2px 5px black;
}
:nth-child(even){
    border-left: 2px solid black;
    box-shadow: -2px 2px 5px black;
}
`;

export const MemberImg = styled.img`
width: 20%;
`;
export const MemberName = styled.div`
width: 80%;
font-size: 30px;

display: flex;
justify-content: center;
align-items: center;
`;