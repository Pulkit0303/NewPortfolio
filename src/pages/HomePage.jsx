function HomePage() {
  return (
    <div className="flex flex-col h-screen w-screen justify-evenly text-center px-4 md:px-14 bg-black text-white">      
      <div className="flex flex-row justify-between text-[5vw] md:text-[3vw] lg:text-[2vw] cursor-pointer">
        <a className="leading-none text-start">
          {`PULKIT`} <br /> {`HEDA`}
        </a>
        <a>CONTACT ME</a>
      </div>
      
      <div className="flex flex-row justify-center">
        <div className="flex flex-col w-fit">
          <p className="lg:text-[12vw] text-[11vw] leading-none">
            FRONTEND DEVELOPER
          </p>
          <p className="text-end tracking-[0.6em] lg:tracking-[1em] font-mono text-[3vw] lg:text-[1.5vw]">BASED IN INDIA</p>
        </div>
      </div>
      
      <div className="flex flex-row justify-center gap-6 flex-wrap-reverse">
        <div className="flex flex-col justify-end text-[130%] lg:text-[200%] text-start">
          <p>/ DEVOPS ENGINEER</p>
          <p>/ FRONTEND DEVELOPER</p>
          <p>/ UI DESIGNER</p>
        </div>
        <div className="w-50 h-70 md:w-80 md:h-100 lg:w-96 lg:h-120 bg-white rounded-2xl" />
      </div>
      
      <div className="flex flex-row justify-center font-mono">
        <p className="w-[90%] xl:w-[40%]">
          Developer with experience on development and deployment with on demand tools and technologies
        </p>
      </div>

    </div>
  );
}

export default HomePage;
