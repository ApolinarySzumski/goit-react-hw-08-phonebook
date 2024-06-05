import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <p>Fill out your user data</p>
      <form>
        <label>Username</label>
        <input type="text" name="username" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Password</label>
        <input type="password" name="password" />
        <button type="submit"></button>
      </form>
      <p>Click link below, you will back to login form</p>
      <Link to="/register">Login form</Link>
    </div>
  );
};

export default Login;
