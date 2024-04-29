import { Link, useParams } from "react-router-dom";
import { BASE_URL } from "../consts";
import { useEffect, useState } from "react";

export default function RepoDetails() {
  const [gitRepoData, setgitRepoData] = useState();
  const [cloneCopy, setCloneCopy] = useState(false);
  const { name, username } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`${BASE_URL}/repos/${username}/${name}`);
      if (!res.ok) throw new Error("failed to fetch");
      const data = await res.json();
      setgitRepoData(data);
    };
    fetchUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='top-cont'>
      {gitRepoData ? (
        <>
          <img
            className='avatar-img'
            src={gitRepoData.owner.avatar_url}
            alt=''
            style={{ width: '30%' }}
          />
          <div className='name-cont'>
            <span className='username'>
              Owner:{' '}
              <Link to={`/users/${gitRepoData.owner.login}`}>
                {gitRepoData.owner.login}
              </Link>
            </span>
            <span className='repo-lang-span'>
              Language: {gitRepoData.language}
            </span>
            <h2>{gitRepoData.name}</h2>
            <div className='follow-cont'>
              <a
                className='view-ongit-a'
                href={gitRepoData.html_url}
                target='_blank'
                rel='noreferrer'
              >
                View on GitHub
              </a>
              <div>
                <input
                  className='clone-url-inp'
                  type='text'
                  value={gitRepoData.clone_url}
                />
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(gitRepoData.clone_url);
                    setCloneCopy((isCopied) => !isCopied);
                    setTimeout(
                      () => setCloneCopy((isCopied) => !isCopied),
                      3000
                    );
                  }}
                >
                  {cloneCopy ? 'Copied' : 'Clone'}
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>

  );
}
