import { useState } from "react";
import { useDispatch } from "react-redux";
import FormStyles from "../StyledComponents/FormStyles";
import { register } from "../redux/auth/api";

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  label: {
    display: "flex",
    flexDirection: "column",
  },
};

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formValues));
    setFormValues({
      name: "",
      email: "",
      password: "",
    });
  };

  const isFormValid = () => {
    return formValues.name && formValues.email && formValues.password;
  };

  return (
    <FormStyles>
      <form onSubmit={handleSubmit} autoComplete="off" style={styles.form}>
        <label style={styles.label}>
          Username
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
        </label>
        <label style={styles.label}>
          Email
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
        </label>
        <label style={styles.label}>
          Password
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit" disabled={!isFormValid()}>
          <span>Register</span>
        </button>
      </form>
    </FormStyles>
  );
};
