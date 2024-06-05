import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AppContent from "./components/AppContent";
import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./components/Register";
import RestricredRoute from "./components/RestrictedRoute";
import { useAuth } from "./hooks/useAuth";
import { refreshUser } from "./redux/auth/api";

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, user } = useAuth();

  console.log(user);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing User...</b>
  ) : (
    <Routes>
      <Route
        path="/"
        element={<RestricredRoute redirectTo="/" component={<Home />} />}
      />
      <Route
        path="/register"
        element={<RestricredRoute redirectTo="/" component={<Register />} />}
      />
      <Route
        path="/phonebook"
        element={
          <PrivateRoute redirectTo="/phonebook" component={<AppContent />} />
        }
      />
    </Routes>
  );
};

export default App;
