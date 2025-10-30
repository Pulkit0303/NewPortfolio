import React from "react";

function WorkCard({companyName, position, imgURL, dates, description}) {
  return (
    <div className="flex flex-col p-4 gap-4">
      {/* COMPANY + DATES */}
      <div className="flex flex-row justify-between">
        {/* ICON + TITLE */}
        <div className="flex flex-row gap-4 items-center">
          <img className="xl:w-16 xl:h-16 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg" src={imgURL} alt={companyName} />
          {/* COMPANY + POSITION */}
          <div className="flex flex-col">
            <p className="xl:text-[1.5vw] text-[5vw] lg:text-[3vw] leading-none">{companyName}</p>
            <p className="font-mono text-[3vw] lg:text-[2vw] xl:text-[0.9vw] text-[#b3b2b2]">
              {position}
            </p>
          </div>
        </div>
        <p className="sm:text-[1vw] xl:text-[1.5vw] md:text-[2.3vw] leading-none">
          {dates}
        </p>
      </div>

      {/* Description */}
      <div className="text-justify font-sans text-[2vw] lg:text-[1vw]">{description}</div>
      <div className="flex justify-center">
        <div className="w-[80%] h-0.5 bg-white/20 rounded-full" />
      </div>
    </div>
  );
}

export default WorkCard;
