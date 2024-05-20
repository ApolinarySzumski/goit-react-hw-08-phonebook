import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Input, Paragraph } from "../StyledComponents/Filter";
import { addFilter } from "../redux/filterSlice";

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(addFilter(e.target.value));
  };

  return (
    <>
      <Paragraph>Find contacts by name</Paragraph>
      <Input type="text" name="filter" onChange={handleChange} />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  handleChange: PropTypes.func,
};
