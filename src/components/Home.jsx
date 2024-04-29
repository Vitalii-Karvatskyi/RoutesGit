import { useEffect, useState } from "react";
import { BASE_URL } from "../consts";
import { Link } from "react-router-dom";

export default function Home() {
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${BASE_URL}/search/repositories?q=XXX`);
        if (!res.ok) throw new Error("failed to fetch");
        const data = await res.json();

        setRepos(data.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="users-cont">
      {repos ? (
        repos.map((repo) => (
          <div className="user-card-cont" key={repo.id}>
            <img
              src={repo.owner.avatar_url}
              alt="userAvatar"
              className="user-avatar"
            />
            <span className="username">{repo.name}</span>

            <span className="repo-lang-span">Language: {repo.language}</span>
            <div>
              By:
              <Link to={`/users/${repo.owner.login}`} className="repo-owner">
                {repo.owner.login}
              </Link>
            </div>

            <Link to={`/repo-detail/${repo.name}/${repo.owner.login}`}>
              <button>View Repo</button>
            </Link>
          </div>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
