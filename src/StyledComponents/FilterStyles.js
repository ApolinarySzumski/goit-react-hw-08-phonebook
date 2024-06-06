import styled from "styled-components";

const FilterStyles = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  input {
    background-color: transparent;
    max-width: 100%;
    color: white;
    padding: 10px 15px 10px 25px;
    border: 2px solid white;
    border-radius: 5px;
    letter-spacing: 1px;
    outline: none;
    &:focus {
      outline: none;
      box-shadow: 0px 3px 15px rgb(0, 255, 255);
      transition: 0.1s;
      transition-property: box-shadow;
    }
  }
`;

export default FilterStyles;
