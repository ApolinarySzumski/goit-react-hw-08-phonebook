import PropTypes from "prop-types";
import { Input, Paragraph } from "../StyledComponents/Filter";

export const Filter = () => {
  return (
    <>
      <Paragraph>Find contacts by name</Paragraph>
      <Input type="text" name="filter" title="Find contacts by name" />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  handleChange: PropTypes.func,
};
