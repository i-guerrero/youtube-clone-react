import GitLogo from "../Images/gitlogo.png"
  export default function JamesBio(){
    return (

        
      <><div className="JamesBio">
        <div className='JamesCard'>
            <img className='biopic' src='./Assets/jamesjpg.jpg'  alt='James'/>
        </div>
        <strong>James Scott </strong>
        <p>FSW as Creative <br></br> New Media Production Specialist
        </p>
      </div>
      <div className="github-links">
      <a href="https://github.com/vvjs22">
      <img src={GitLogo} alt="Github Link" className="gitLogo" />
     </a>
        </div></>
    );
  };