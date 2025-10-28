import { PageLinks, SocialLinks } from "../components";
import Resume from '../assets/Pulkit_Resume.pdf'
function ContactPage() {

  return (

    <div className="flex flex-col h-dvh w-screen justify-around px-4 md:px-14 text-center">
      
      {/* EMAIL ADDRESS */}
      <div className="flex flex-col text-end text-[6vw] lg:text-[4vw] xl:text-[2.5vw]">
        <p>CONTACT AT</p>
        <a href="mailto:pulkit.19.2003@gmail.com" className="font-sans">
          pulkit.19.2003@gmail.com
        </a>
      </div>

      {/* DOWNLOAD RESUME BUTTON */}
      <div className="flex flex-row justify-end">
        <a
          href={Resume}
          download
          className="w-fit p-4 lg:p-6 bg-black text-white hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.4)] duration-300 text-[6vw] lg:text-[4vw] xl:text-[2vw]"
        >
          Download Resume Here
        </a>
      </div>

      {/* PAGE LINKS */}
      <div className="flex flex-col items-start">
        <PageLinks title="About" />
        <PageLinks title="Work" />
      </div>

      {/* SOCIAL LINKS */}
      <div className="flex flex-row justify-around">
        <SocialLinks link="https://github.com/Pulkit0303" social={`GITHUB`} />
        <SocialLinks
          link="https://www.linkedin.com/in/pulkit-heda-19032003ph/"
          social={`LINKEDIN`}
        />
        <SocialLinks link="https://x.com/pulkiit_2003" social={`TWITTER`} />
      </div>

      {/* FOOTER */}
      <div className="flex flex-col gap-1">
        <p className="text-[19vw] leading-none">PULKIT HEDA</p>
        <p className="text-[2.5vw] md:text-[1.5vw] xl:text-[0.7vw] font-mono">
          MADE WITH 🖤 BY PULKIT
        </p>
      </div>

    </div>
  );
}

export default ContactPage;
