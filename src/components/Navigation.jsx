import { NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const styles = {
  nav: {
    display: "flex",
    gap: "2rem",
    justifyContent: "center",
  },
};

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav style={styles.nav}>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};
