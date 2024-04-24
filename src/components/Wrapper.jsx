import PropTypes from "prop-types";
import { StyledWrapper } from "../StyledComponents/Wrapper";

export const Wrapper = ({ children }) => (
  <StyledWrapper>{children}</StyledWrapper>
);

Wrapper.propTypes = {
  children: PropTypes.node,
};
