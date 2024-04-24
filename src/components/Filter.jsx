import PropTypes from "prop-types";
import { Input, Paragraph } from "../StyledComponents/Filter";

export const Filter = ({ filter, handleChange }) => {
  return (
    <>
      <Paragraph>Find contacts by name</Paragraph>
      <Input
        type="text"
        name="filter"
        value={filter}
        title="Find contacts by name"
        onChange={handleChange}
      />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  handleChange: PropTypes.func,
};
