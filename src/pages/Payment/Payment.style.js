import styled from 'styled-components';

export const Block = styled.div`
color: whitesmoke;
margin: auto;
height: 100vh;
width: 90%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 2em;

@media(max-width: 1000px){
    flex-direction: column;
    width: 100%;
    padding: 1em;
}
`;

export const Title = styled.h1``;

export const InputBlock = styled.form``;
export const TemplateInput = styled.input`
margin: 5px 0px;
`;

export const NameBlock = styled.div``;
export const InputFirstName = styled(TemplateInput)``;
export const InputLastName = styled(TemplateInput)``;

export const InputEmail = styled(TemplateInput)`
width: 100%;
`;
export const InputStreet = styled(TemplateInput)`
width: 100%;
`;

export const CityZipBlock = styled.div``;
export const InputCity = styled(TemplateInput)``;
export const InputZip = styled(TemplateInput)``;

export const InputCard = styled(TemplateInput)`
width: 100%;
`;

export const DateAndCvcBlock = styled.div`
display: flex;
justify-content: space-evenly;
`;
export const DateBlock = styled.div``;
export const InputMonth = styled(TemplateInput)`
width: 2em;
`;
export const InputYear = styled(TemplateInput)`
width: 3em;
`;

export const InputCvc = styled(TemplateInput)`
width: 3em;
`;


export const PayBtn = styled.button`
margin-top: 10px;
font-size: 24px;
padding: 5px 10px;

border-radius: 10px;
background-color: transparent;
border-color: rgb(27 138 217);
color: white;

:hover{
    cursor: pointer;
    background-color: rgb(27 138 217);
}
:active{
    background-color: rgb(37 140 55);
    color: white;

}
`;