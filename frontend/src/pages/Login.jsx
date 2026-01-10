import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      login(res.data.token);
      navigate("/");
    } catch (e) {
      setError(e.response?.data?.message || "Login Failed");
    }
  };

  return (
    <>
      <div className="auth-container">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}

        <form onSubmit={submitHandler}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit"> Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
