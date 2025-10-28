import ContactMe from "../assets/contactme.svg";
import { motion } from "framer-motion";

function PageLinks(props) {

  const handleClick = (e) => {
    e.preventDefault();
    props.scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <motion.div
      onClick={handleClick}
      initial="rest"
      whileHover="hover"
      className="flex flex-row gap-1 items-center text-[5vw] md:text-[3vw] xl:text-[2vw] cursor-pointer"
    >
      <a>{props.title}</a>
      <motion.img
        src={ContactMe}
        alt="contact"
        className="xl:w-14 xl:h-14 w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
        variants={{ rest: { rotate: 0 }, hover: { rotate: -135 } }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

export default PageLinks;
