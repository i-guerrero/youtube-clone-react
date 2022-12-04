import GitLogo from "../Images/gitlogo.png"

export default function IsaacBio(){
    return (
      <><div className="IsaacBio">
      <div className='IsaacCard'>
          <img className='biopic' src='./Assets/isaacjpg.jpeg' alt='Issac'/>
      </div>
        <strong>Isaac Guerrero </strong>
        <p>Full Stack Software Engineer - Pursuit | Interests - DevOps, cloud computing, machine learning | Technologies - JavaScript, React, Express, PostgreSQL
        </p>
      </div>
      <div className="github-links">
      <a href="https://github.com/i-guerrero">
      <img src={GitLogo} alt="Github Link" className="gitLogo" />
     </a>
        </div></>
    );
  };
  