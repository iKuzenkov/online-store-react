import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, clearError } from "../../features/authSlice/authSlice";
import { useNavigate, Link } from "react-router-dom";
import "./LoginPage.scss";
import "../Auth/AuthForm.scss";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  return (
    <main className="login-page">
      <h1>Login</h1>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email:{" "}
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Password:{" "}
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {error && (
          <p style={{ color: "red", fontSize: "0.85rem" }}>
            The user does not exist. Registration is required.
          </p>
        )}
        <button type="submit">Login</button>
      </form>
    </main>
  );
}

export default LoginPage;
