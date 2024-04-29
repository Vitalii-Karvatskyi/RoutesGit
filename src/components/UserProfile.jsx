import { useParams } from "react-router-dom";
import { BASE_URL } from "../consts";
import { useEffect, useState } from "react";

export default function UserProfile() {
  const [gitUserData, setGitUserData] = useState({});
  const { username } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${BASE_URL}/users/${username}`);
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setGitUserData(data);
    };
    fetchData();
  }, [username]);

  return (
    <div className="user-profile-main-cont">
      <div className="top-cont">
        <img
          src={gitUserData.avatar_url}
          className="user-avatar-img"
          alt="user-img"
        />
        <div className="name-cont">
          <span>{gitUserData.login}</span>
          <h2>{gitUserData.name}</h2>
          <h3>{gitUserData.location}</h3>
          <div className="follow-cont">
            <span className="followers">
              Followers: {gitUserData.followers}
            </span>
            <span>Following: {gitUserData.following}</span>
          </div>
          <a
            className="view-ongit-a"
            href={gitUserData.html_url}
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>
          {/* <Link to={gitUserData.html_url}>View on GitHub</Link> */}
        </div>
      </div>
      <div className="bottom-cont">
        <h3>{gitUserData.bio}</h3>
      </div>
    </div>
  );
}
