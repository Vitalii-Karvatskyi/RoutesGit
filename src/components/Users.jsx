import { useEffect, useState } from "react";
import { BASE_URL } from "../consts";
import { Link } from "react-router-dom";

export default function Users() {
  const [gitUsers, setGitUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${BASE_URL}/users?since=XXXX`);
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setGitUsers(data);
    };
    fetchData();
  }, []);
  return (
    <div style={{ marginTop: "50px" }}>
      <div className="users-cont">
        {gitUsers.map((user) => (
          <div className="user-card-cont" key={user.id}>
            <img
              src={user.avatar_url}
              alt="userAvatar"
              className="user-avatar"
            />
            <span className="username">{user.login}</span>
            <Link className="view-btn" to={`/users/${user.login}`}>
              View User
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
