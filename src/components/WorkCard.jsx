function WorkCard({companyName, position, imgURL, dates, description, companykey}) {

  return (

    <div className="flex flex-col p-4 gap-4" key={companykey}>
      
      {/* COMPANY + DATES */}
      <div className="flex flex-row justify-between">
        
        {/* ICON + TITLE */}
        <div className="flex flex-row gap-2 items-center">
          {imgURL ? (
            <img className="xl:w-16 xl:h-16 w-11 h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg" src={imgURL} alt={companyName}/>
          ):(
            <div className="xl:w-16 xl:h-16 w-11 h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg bg-black text-white text-base flex justify-center items-center font-sans">P&A</div>
          )}

          {/* COMPANY + POSITION */}
          <div className="flex flex-col">
            <p className="xl:text-[1.5vw] text-[4.5vw] md:text-[3.5vw] lg:text-[3vw] leading-none">{companyName}</p>
            <p className="font-mono text-[3vw] md:text-[2.5vw] lg:text-[1.5vw] xl:text-[0.9vw] text-[#979797]">
              {position}
            </p>
          </div>

        </div>

        {/* Dates */}
        <p className="text-[3.5vw] xl:text-[1.5vw] md:text-[2.3vw] leading-none">
          {dates}
        </p>

      </div>

      {/* Description */}
      <div className="text-justify font-sans text-[3vw] lg:text-[1.5vw]">{description}</div>
      
      {/* Seperator */}
      <div className="flex justify-center">
        <div className="w-[80%] h-1 bg-black/30 rounded-full" />
      </div>

    </div>
  );
}

export default WorkCard;
