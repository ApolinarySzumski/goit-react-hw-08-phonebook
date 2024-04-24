import PropTypes from "prop-types";
import { StyledHeader } from "../StyledComponents/Header";

export const Header = ({ text }) => <StyledHeader>{text}</StyledHeader>;

Header.propTypes = {
  text: PropTypes.string,
};
