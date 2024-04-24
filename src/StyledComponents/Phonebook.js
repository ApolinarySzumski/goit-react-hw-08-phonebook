import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

export const Label = styled.label`
  font-size: 20px;
  color: #dfd0b8;
`;

export const Input = styled.input`
  max-width: 200px;
`;

export const Button = styled.button`
  padding: 10px 15px;
  color: #dfd0b8;
  cursor: pointer;
  background-color: green;
  border-radius: 8px;
  border: 0px;
`;
