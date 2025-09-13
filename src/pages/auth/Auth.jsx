import { useState } from "react";
import LoginPage from "../login-page/LoginPage";
import RegisterPage from "../register/RegisterPage";
import "./Auth.scss";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-page">
      {isLogin ? <LoginPage /> : <RegisterPage />}
      <p>
        {isLogin ? "Don't have an account" : "Already have an account?"}{" "}
        <button className="switch-btn" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Register here" : "Login here"}
        </button>
      </p>
    </div>
  );
}

export default Auth;
