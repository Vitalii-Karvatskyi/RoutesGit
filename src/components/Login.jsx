import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setIsLogged, setUserName, userName }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const data = { username: "Vitalii-Karvatskyi", password: "12345" };

  function handleLogin(e) {
    e.preventDefault();

    if (login === data.username && password === data.password) {
      setUserName(login);
      setIsLogged(true);
      navigate("/auth");
    } else {
      setErrorMsg("Invalid Credentials");
    }
  }
  return (
    <>
      <form className="login-form" onSubmit={handleLogin}>
        <span className="error-span">{errorMsg}</span>
        <label htmlFor="login" className="login-label">
          login
        </label>
        <input
          className="login-inp"
          type="text"
          placeholder="Login"
          value={login}
          name="login"
          onChange={(e) => {
            setLogin(e.target.value);
            setErrorMsg("");
          }}
        />
        <label htmlFor="password" className="login-label">
          password
        </label>
        <input
          className="login-inp"
          type="password"
          placeholder="password"
          value={password}
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
            setErrorMsg("");
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
