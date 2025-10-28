import React from "react";

function WorkCard() {
  return (
    <div className="flex flex-col h-screen w-screen p-4 gap-4">
      {/* COMPANY + DATES */}
      <div className="flex flex-row justify-between">
        {/* ICON + TITLE */}
        <div className="flex flex-row gap-4 items-center">
          <div className="xl:w-16 xl:h-16 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-black rounded-lg"/>
          {/* COMPANY + POSITION */}
          <div className="flex flex-col">
            <p className="xl:text-[1.5vw] leading-none">COMPANY NAME</p>
            <p className="font-mono sm:text-[2vw] xl:text-[0.9vw]">COMPANY POSITION</p>
          </div>
        </div>
        <p className="sm:text-[1vw] xl:text-[1.5vw] leading-none">OCT 25 - PRESENT</p>
      </div>
      
      {/* Description */}
      <div className="text-justify font-sans">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
        voluptatibus, in magni doloremque obcaecati voluptates sed optio?
        Expedita officiis impedit aspernatur voluptatibus cumque, eaque
        accusantium iusto placeat beatae, animi vel! Eaque, quasi obcaecati amet
        beatae labore in commodi magni dicta? Dicta id quaer
      </div>

      <div className="w-[70%] h-0.5 bg-black/40 rounded-full"/>

    </div>
  );
}

export default WorkCard;
