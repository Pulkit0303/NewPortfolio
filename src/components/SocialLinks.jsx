
function SocialLinks(props) {
  return (
    <a
      href={props.link}
      className=" text-[5vw] lg:text-[3vw] xl:text-[2vw] hover:[word-spacing:10px] hover:scale-110 duration-300 font-sans"
      target='_blank'
    >{`[ ${props.social} ]`}</a>
  );
}

export default SocialLinks;
