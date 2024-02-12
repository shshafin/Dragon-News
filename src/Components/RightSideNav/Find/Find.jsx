import { Button } from "@material-tailwind/react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import "./Find.css";
const Find = () => {
  return (
    <div>
      <h1 className="text-xl font-bold">Find Us On</h1>
      <div className=" mt-4 ">
        <a href="https://www.facebook.com/">
          <Button
            size="md"
            className="flex items-center gap-3 pr-[114px] fb-bg rounded-t-lg rounded-b-none w-full text-sm "
          >
            <FaFacebook className="h-6 w-6"></FaFacebook>
            Facebook
          </Button>
        </a>
        <a href="https://www.instagram.com/">
          <Button
            size="md"
            className="flex items-center gap-3 bg-black text-white pr-[110px] gradient-bg rounded-none w-full text-sm "
          >
            <FaInstagram className="h-6 w-6" />
            Instagram
          </Button>
        </a>
        <a href="https://twitter.com/">
          <Button
            size="lg"
            variant="gradient"
            color="light-blue"
            className="group relative flex items-center gap-3 overflow-hidden pr-[74px] rounded-b-lg rounded-t-none w-full text-sm "
          >
            <h1 className="px-[39px]">Twitter</h1>
            <span className="absolute left-0 grid h-full w-12 place-items-center bg-light-blue-600 transition-colors group-hover:bg-light-blue-700">
              <img
                src="https://docs.material-tailwind.com/icons/twitter.svg"
                alt="metamask"
                className="h-6 w-6"
              />
            </span>
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Find;
