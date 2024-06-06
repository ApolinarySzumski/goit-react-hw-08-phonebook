import styled from "styled-components";

const ContactListStyles = styled.div`
  ul {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    li {
      display: flex;
      justify-content: space-between;

      align-items: center;

      div {
        display: flex;
        flex-direction: column;
        font-family: "Courier New", Courier, monospace;
      }
      button {
        background-color: transparent;
        border: none;
        letter-spacing: 4px;
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

export default ContactListStyles;
