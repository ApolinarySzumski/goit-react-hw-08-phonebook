import { useDispatch } from "react-redux";
import { useAuth } from "../hooks/useAuth";
import { logOut } from "../redux/auth/api";

const styles = {
  p: {
    display: "flex",
    gap: "2rem",
    justifyContent: "center",
    color: "red",
  },
  button: {
    backgroundColor: "transparent",
    border: "none",
    padding: "0.5rem 1.5rem",
    color: "navy",
    cursor: "pointer",
  },
};

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <p style={styles.p}>Welcome, {user.name}</p>
      <button
        style={styles.button}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
