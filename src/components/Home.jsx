import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logIn } from "../redux/auth/api";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const username = form.elements.username.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (!username || !email || !password) {
      alert("All fields are required.");
      return;
    }

    const response = await dispatch(logIn({ name: username, email, password }));

    if (response.type === "auth/login/fulfilled") {
      navigate("/phonebook");
    } else {
      alert("Invalid credentials or user does not exist.");
    }

    form.reset();
  };

  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <section>
        <p>Login form</p>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input type="text" name="username" required />
          <label>Email</label>
          <input type="email" name="email" required />
          <label>Password</label>
          <input type="password" name="password" required />
          <button type="submit">Log in</button>
        </form>
        <p>You have not account? Click link below to register</p>
        <Link to="/register">Create account</Link>
      </section>
    </div>
  );
};

export default Home;
