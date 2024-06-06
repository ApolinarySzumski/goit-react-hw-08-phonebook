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
      color: white;
      padding: 10px 15px 10px 25px;
      border: 2px solid white;
      border-radius: 5px;
      letter-spacing: 1px;

      &:focus {
        outline: none;
        box-shadow: 0px 3px 15px rgb(0, 255, 255);
        transition: 0.1s;
        transition-property: box-shadow;
      }
    }

    button {
      background-color: transparent;
      border: none;
      padding: 0.5rem 1.5rem;
      color: white;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 2px;

      span {
        cursor: pointer;
        position: relative;
        &::after {
          content: "";
          width: 0;
          height: 2px;
          position: absolute;
          bottom: -4px;
          background: rgb(0, 255, 255);
          box-shadow: 0px 3px 15px rgb(0, 255, 255);
          transition: width 0.5s, left 0.5s;
          right: 0;
        }

        &:hover::after {
          width: 100%;
          left: 0;
        }
      }
    }
  }
`;

export default FormStyles;
