import { NavLink } from "react-router-dom";

const styles = {
  div: {
    display: "flex",
    gap: "2rem",
  },
};

export const AuthNav = () => {
  return (
    <div style={styles.div}>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log in</NavLink>
    </div>
  );
};
