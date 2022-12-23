import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: center;
row-gap: 220px;
width: 100%;
height: 100vh;
padding: 2rem;
gap: 1rem;
input {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  height: 2rem;
  width: 15rem;
  border-radius: 7px;
}
`;

export const InputStyleContainer = styled.input`
 :hover {
    
  }
`;

export const HeaderContainerH1 = styled.h1`
  margin: 5px;
`;

export const ButtonFilterContainer = styled.button`
:hover {
  background-color: yellow;
  color: black;
}
  width: 100px;
  border-radius: 5px;
  margin: 10px;
`;
