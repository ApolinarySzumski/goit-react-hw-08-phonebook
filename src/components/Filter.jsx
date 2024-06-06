import { useDispatch } from "react-redux";
import FilterStyles from "../StyledComponents/FilterStyles";
import { setSearchBy } from "../redux/contacts/filtersSlice";

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    const value = e.target.value;
    dispatch(setSearchBy(value));
  };

  return (
    <FilterStyles>
      <input
        type="text"
        onChange={handleFilterChange}
        placeholder="Search..."
      />
    </FilterStyles>
  );
};

export default Filter;
