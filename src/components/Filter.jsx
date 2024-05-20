import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Input, Paragraph } from "../StyledComponents/Filter";
import { addFilter } from "../redux/filterSlice";
import { getContacts } from "../redux/selectors";

export const Filter = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  console.log(contacts);
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
