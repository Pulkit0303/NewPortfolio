import {
  TailwindCSS,
  ReactIcon,
  Git,
  Terraform,
  Jenkins,
  Docker,
  NextJS,
  AWS,
  GitHubActions
} from "../assets/Icons";
import { useCursor } from "../context/CursorContext";

function TechCircle() {
  const { mouseEntered, mouseLeaved } = useCursor();

  return (
    <div
      className="flex flex-row gap-6 lg:gap-10 bg-black rounded-full items-center justify-center p-10 lg:p-20"
      onMouseEnter={mouseEntered}
      onMouseLeave={mouseLeaved}
    >
      <div className="flex flex-col gap-6 lg:gap-10">
        <NextJS className="w-11 h-11 lg:w-21 lg:h-21 rounded-lg" />
        <ReactIcon className="w-11 h-11 lg:w-21 lg:h-21" />
        <TailwindCSS className="w-11 h-11 lg:w-21 lg:h-21" />
      </div>
      <div className="flex flex-col gap-6 lg:gap-10">
        <GitHubActions className="w-11 h-11 lg:w-21 lg:h-21" />
        <AWS className="w-11 h-11 lg:w-21 lg:h-21 fill-white" />
        <Git className="w-11 h-11 lg:w-21 lg:h-21" />
      </div>
      <div className="flex flex-col gap-6 lg:gap-10">
        <Docker className="w-11 h-11 lg:w-21 lg:h-21" />
        <Jenkins className="w-11 h-11 lg:w-21 lg:h-21" />
        <Terraform className="w-11 h-11 lg:w-21 lg:h-21" />
      </div>
    </div>
  );
}

export default TechCircle;
