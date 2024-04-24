import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
  flex-wrap: wrap;
  list-style: none;
  border-radius: 4px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1000px;
  height: 80px;
  color: inherit;
  background-color: #153448;
  padding: 10px 30px;
  gap: 10px;
`;

export const Paragraph = styled.p`
  color: tomato;
`;

export const Button = styled.button`
  padding: 4px 6px;
  color: #dfd0b8;
  cursor: pointer;
  background-color: red;
  border-radius: 4px;
  border: 0px;
`;
