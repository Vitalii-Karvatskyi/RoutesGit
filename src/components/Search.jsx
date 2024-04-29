import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../consts";

export default function Search() {
  const [findingUser, setFindingUser] = useState("");
  const [attemts, setAttemts] = useState(3);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState("Submit");

  const navigate = useNavigate();

  async function handleFetchUser() {
    // if (attemts<=0) {
    //     navigate(`/`)
    // }

    try {
      const res = await fetch(`${BASE_URL}/users/${findingUser}`);
      if (!res.ok) throw new Error("Failed to fetch");
      // const data = await res.json()
      navigate(`/users/${findingUser}`);
      // return data
    } catch (error) {
      setAttemts((curAttemt) => curAttemt - 1);
      setErrorMsg(
        `User with name ${findingUser} doesn't exist. Attemts: ${attemts - 1}`
      );
      console.log(error);
    } finally {
      setLoading("Submit");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading("Loading...");
      if (findingUser) {
        handleFetchUser();
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (attemts <= 0) {
      setErrorMsg("Too many attemts. Redirect...");
      const timerId = setTimeout(() => navigate(`/`), 3000);
      return () => clearTimeout(timerId);
    }
  }, [attemts, navigate]);

  return (
    <>
      <h2>Search User</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        {errorMsg && (
          <span style={{ fontSize: "13px", color: "orangered" }}>
            {errorMsg}
          </span>
        )}
        <input
          className="login-inp"
          type="text"
          placeholder="find user"
          value={findingUser}
          onChange={(e) => {
            setFindingUser(e.target.value), setErrorMsg(null);
          }}
        />
        <button className="login-submit-btn" type="Submit">
          {loading}
        </button>
      </form>
    </>
  );
}
