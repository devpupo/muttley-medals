import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 100px;
`;

export const ButtonWrapper = styled.button`
  --size: 100px;
  
  width: var(--size);
  height: var(--size);
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  font-size: 33px;
  background-color: #fff;
  border: none;
  padding: 0;
  
  cursor: pointer;
  outline: 0;
  border-radius: 100%;
  
  .animation {
    pointer-events: none;
  }
`;

export const Counter = styled.p`
  font-size: 50px;
  color: white;
`;
