import { useAuth } from "../hooks/useAuth";
import { AuthNav } from "./AuthNav";
import { Navigation } from "./Navigation";
import { UserMenu } from "./UserMenu";

const styles = {
  div: {
    display: "flex",
    gap: "2rem",
    justifyContent: "center",
  },
};

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header style={styles.div}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
