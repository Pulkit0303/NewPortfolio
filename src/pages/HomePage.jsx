import { PageLinks } from "../components";
import Picture from "../assets/Images/Pic.jpg";
import { useCursor } from "../context/CursorContext";

function HomePage( {homeref} ) {

  const {mouseEntered,mouseLeaved} = useCursor()
  
  return (
    <div className="flex flex-col h-dvh w-screen justify-evenly text-center px-4 md:px-14">

      {/* TOP BAR */}
      <div className="flex flex-row justify-between text-[5vw] md:text-[3vw] xl:text-[2vw]">
        <a className="leading-none text-start cursor-pointer" href="/">
          {`PULKIT`} <br /> {`HEDA`}
        </a>
        {/* TO CONTACT PAGE */}
        <PageLinks title="Contact Me" scrollRef={homeref} />
      </div>

      {/* TITLE */}
      <div className="flex flex-row justify-center">
        <div className="flex flex-col w-fit">
          <p className="text-[11vw] leading-none" onMouseEnter={mouseEntered} onMouseLeave={mouseLeaved}>FRONTEND DEVELOPER</p>
          <p className="text-end tracking-[0.6em] leading-none lg:tracking-[1em] font-mono text-[3vw] lg:text-[1.5vw]">
            BASED IN INDIA
          </p>
        </div>
      </div>

      {/* IMAGE + SKILLS */}
      <div className="flex flex-row justify-center gap-6 flex-wrap-reverse">
        <div className="flex flex-col justify-end text-[130%] lg:text-[200%] text-start">
          <p>/ DEVOPS ENGINEER</p>
          <p>/ FRONTEND DEVELOPER</p>
          <p>/ UI DESIGNER</p>
        </div>
        <img
          className="w-53 h-70 md:w-75 md:h-100 lg:w-80 lg:h-105 bg-black shadow-[10px_10px_2px_0px_rgba(255,255,255,0.2)]"
          src={Picture}
          alt="Picture"
        />
      </div>

      {/* DESCRIPTION */}
      <div className="flex flex-row justify-center font-mono">
        <p className="w-[90%] xl:w-[40%]">
          Developer with experience on development and deployment with on demand
          tools and technologies
        </p>
      </div>

    </div>
  );
}

export default HomePage;
