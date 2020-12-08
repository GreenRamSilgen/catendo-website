import styled from 'styled-components';

export const Slider = styled.div`
//border: 1px solid red;
position: relative;
width: 100%;
height: 100vh;
box-sizing: border-box;
margin: 0;
padding: 0;
display: flex;
align-items: center;
overflow: hidden;
`;


export const Slide = styled.div`
//border: 1px solid blue;
background-color: rgb(0 0 0 / 29%);;
min-width: 100%;
height: 100%;
transition: .5s;
overflow: hidden;
z-index: 0;
`;


const Btn = styled.button`
position: absolute;
background: none;
top: 50%;
transform: translateY(-50%);
width: 10%;
height: 100%;
background: none;
border: none;
outline: none !important;
transition: .5s;
z-index: 1;
:hover{
    background: rgb(0,0,0, 0.356);
    cursor: pointer;
    color: white;
    outline: none;
}
`;
export const LeftBtn = styled(Btn)`
left: 0;
`;


export const RightBtn = styled(Btn)`
right:0;
`;