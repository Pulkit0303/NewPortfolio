function TechPage() {
  return (
    <div className="flex lg:flex-row lg:justify-between items-center justify-evenly gap-8 flex-col w-screen h-dvh px-4 md:px-14">
      
      <div className="flex flex-col gap-4 lg:w-1/2">
        <p className="border-b-6 text-center text-[200%] lg:text-[7vw] leading-none">
          EXPERIENCE
        </p>
        <div className="flex flex-col"></div>
      </div>

      <div className="flex flex-col lg:w-1/2">
        <p className="border-b-6 text-center text-[200%] lg:text-[7vw] leading-none">
          TECH STACK
        </p>
        <div className="w-[80%] h-[80%] bg-black rounded-full"/>
      </div>
      
    </div>
  );
}

export default TechPage;
