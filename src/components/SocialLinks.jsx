import { useCursor } from "../context/CursorContext";

function SocialLinks(props) {
  const { mouseLink, mouseLeaved } = useCursor();
  return (
    <a
      href={props.link}
      className=" text-[5vw] md:text-[4vw] lg:text-[3vw] xl:text-[2vw] hover:[word-spacing:15px] duration-300 font-sans cursor-pointer"
      target="_blank"
      onMouseEnter={mouseLink}
      onMouseLeave={mouseLeaved}
    >{`{ ${props.social} }`}</a>
  );
}

export default SocialLinks;
