import { WorkCard,TechCircle } from "../components";
import AR from '../assets/Images/AR.png';
import Xebia from '../assets/Images/Xebia.jpeg'

function TechPage() {

  const companies = [
    {
      name: `ANAND RATHI`,
      position: `FRONTEND INTERN`,
      dates: `OCT 25 - PRESENT`,
      imgURL: AR,
      descrption: `.`
    },
    {
      name: `PIVOT & ANCHOR`,
      position: `FRONTEND INTERN`,
      dates: `JUN 25 - SEPT 25`,
      imgURL: ``,
      descrption: `.`
    },
    {
      name: `XEBIA`,
      position: `PROJECT INTERN`,
      dates: `JUN 24 - JUL 24`,
      imgURL: Xebia,
      descrption: `.`
    },
  ];

  return (

    <div className="flex flex-row flex-wrap h-dvh w-screen justify-center lg:justify-evenly px-4 bg-white text-black">
      
      {/* Experience */}
      <div className="flex flex-col">
        <h1 className="text-center text-[9vw] md:text-[4vw] lg:text-[5vw]">EXPERIENCE</h1>
        
        {/* WorkCard */}
        {companies.map((company,index)=>(
          <WorkCard companyName={company.name} position={company.position} imgURL={company.imgURL} key={index} dates={company.dates} />
        ))}
      </div>

      {/* TechStack */}
      <div className="flex flex-col gap-1">
        <h1 className="text-center text-[9vw] md:text-[4vw] lg:text-[5vw]">TECH STACK</h1>
        
        {/* TechCircle */}
        <div className="flex justify-center lg:items-center">
          <TechCircle/>
        </div>
      </div>

    </div>
  );
}

export default TechPage;
