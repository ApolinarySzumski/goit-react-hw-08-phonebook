import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../redux/auth/api";

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.username.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      }),
    );
    form.reset();
  };

  return (
    <div>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <section>
        <p>Register form</p>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input type="text" name="username" required />
          <label>Email</label>
          <input type="email" name="email" required />
          <label>Password</label>
          <input type="password" name="password" required />
          <button type="submit">Register</button>
        </form>
        <p>Click link below, you will back to login form</p>
        <Link to="/">Login form</Link>
      </section>
    </div>
  );
};

export default Register;
