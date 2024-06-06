import PropTypes from "prop-types";
import SectionStyles from "../StyledComponents/SectionStyles";

export const Section = ({ title, children }) => {
  return (
    <>
      <SectionStyles>
        <h2>{title}</h2>
      </SectionStyles>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
