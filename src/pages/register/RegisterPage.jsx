import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, clearError } from "../../features/auth/AuthSlice";
import { useNavigate, Link } from "react-router-dom";
import "../auth/AuthForm.scss";

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [localError, setLocalError] = useState("");

  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirm) {
      setLocalError("Password do not match");
      return;
    }

    setLocalError("");
    dispatch(register({ email, password }));
  };

  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  return (
    <main>
      <h1>Register</h1>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>
          Email:{" "}
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password (min 6 chars):{" "}
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          Confirm Password:{" "}
          <input
            id="confirm-password"
            name="confirm-password"
            type="password"
            value={confirm}
            required
            onChange={(e) => setConfirm(e.target.value)}
          />
        </label>
        {localError && (
          <p style={{ color: "red", fontSize: "0.85rem" }}>{localError}</p>
        )}
        {error && <p style={{ color: "red", fontSize: "0.85rem" }}>{error}</p>}
        <button type="submit">Register</button>
      </form>
    </main>
  );
}

export default RegisterPage;
