import GitLogo from "../Images/gitlogo.png"
  export default function CarlosBio(){
    return (
        <><div className="CarlosBio">
        <div className='CarlosCard'>
            <img className='biopic' src='./Assets/Carlosjpg.png' alt='Carlos'/>
        </div>
        <strong>Carlos Suero </strong>
        <p> Carlos Suero is a Full-Stack developer in progress. He has always had a love of technology, and its insides.
        </p>
      </div>
      <div className="github-links">
     <a href="https://github.com/CJS2408">
     <img src={GitLogo} alt="Github Link" className="gitLogo" />
     </a>
        </div></>
    );
  };