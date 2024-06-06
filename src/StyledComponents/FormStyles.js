import styled from "styled-components";

const FormStyles = styled.div`
  margin-top: 1rem;
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    label {
      display: flex;
      flex-direction: column;
    }
    input {
      background-color: transparent;
      max-width: 100%;
      color: black;
      padding: 10px 15px 10px 25px;
      border: 2px solid black;
      border-radius: 3px;
      letter-spacing: 1px;
    }

    button {
      background-color: transparent;
      border: none;
      padding: 0.5rem 1.5rem;
      color: #948979;

      span {
        cursor: pointer;
        position: relative;
      }
    }
  }
`;

export default FormStyles;
