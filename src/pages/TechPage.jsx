import { WorkCard } from "../components";
import AR from '../assets/AR.png';
import Xebia from '../assets/Xebia.jpeg'

function TechPage() {

  const companies = [
    {
      name: `ANAND RATHI`,
      position: `FRONTEND INTERN`,
      dates: `OCT 25 - PRESENT`,
      imgURL: AR,
      descrption: ``
    },
    {
      name: `PIVOT & ANCHOR`,
      position: `FRONTEND INTERN`,
      dates: `JUN 25 - SEPT 25`,
      imgURL: ``,
      descrption: ``
    },
    {
      name: `XEBIA`,
      position: `PROJECT INTERN`,
      dates: `JUN 24 - JUL 24`,
      imgURL: Xebia,
      descrption: `Developed a comprehensive Gym Management System in collaboration with the team using Node.js and Express.js, significantly enhancing operational efficiency by streamlining key workflows. Egineered and automated a robust CI/CD pipeline with GitHub Actions, accelerating deployments and improving reliability through consistent integration and delivery practices.`
    },
  ];

  return (

    <div className="flex lg:flex-row lg:justify-between items-center justify-evenly gap-8 flex-col w-screen h-dvh px-1 py-2 md:px-4">
      
      {/* Experience */}
      <div className="flex flex-col gap-2 lg:max-w-1/2 h-[60%] lg:h-full">
        <p className="underline underline-offset-4 text-center text-[200%] lg:text-[7vw] leading-none">
          EXPERIENCE
        </p>
        <div className="flex flex-col lg:gap-10 md:gap-4">
          {companies.map((company)=>(
            <WorkCard 
            companyName={company.name}
            position={company.position}
            imgURL={company.imgURL}
            dates={company.dates}
            description={company.descrption}/>
          ))}
        </div>
      </div>

      {/* TECH STACK */}
      <div className="flex flex-col lg:w-1/2 h-[40%] lg:h-full">
        <p className="underline underline-offset-4 text-center text-[200%] lg:text-[7vw] leading-none">
          TECH STACK
        </p>
        {/* Tech Circle */}
      </div>

    </div>
  );
}

export default TechPage;
