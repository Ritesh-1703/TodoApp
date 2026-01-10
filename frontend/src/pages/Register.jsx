import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await api.post("/auth/register", {
        name,
        email,
        password,
      });

      navigate("/login");
    } catch (e) {
      setError(e.response?.data?.message || "Failed to Register");
    }
  };

  return (
    <>
      <div className="auth-container">
        <h2> Register</h2>
        {error && <p className="error"> {error}</p>}

        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
          <button type="submit"> Register </button>
        </form>
      </div>
    </>
  );
};

export default Register;
