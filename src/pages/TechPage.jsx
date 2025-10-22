function TechPage() {
  return (
    <div className="flex md:flex-row flex-col md:justify-between w-screen h-screen px-4 md:px-14 bg-white text-black">
      <div className="flex flex-col gap-4">
        <p className="border-b-6 text-center text-[200%] lg:text-[900%] leading-none">
          WORK EXPERIENCE
        </p>
        <div className="flex flex-col gap-8">
          <div className="bg-black w-40 h-20" />
          <div className="bg-black w-40 h-20" />
          <div className="bg-black w-40 h-20" />
        </div>
      </div>
      <div className="flex flex-col">
        <p className="border-b-6 text-center text-[200%] lg:text-[900%] leading-none">
          TECH STACK
        </p>
      </div>
    </div>
  );
}

export default TechPage;
