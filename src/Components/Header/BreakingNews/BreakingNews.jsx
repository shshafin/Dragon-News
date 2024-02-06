import { Button } from "@material-tailwind/react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex justify-center items-center bg-gray-200 p-3 ">
      <Button className="bg-pink-600 rounded-none" color="red">
        Latest
      </Button>
      <Marquee
        pauseOnHover={true}
        speed={100}
        className="mx-3 font-semibold text-gray-800"
      >
        <Link className="mr-7" to={"/"}>
          Match Highlights: Germany vs Spain — as it happened !
        </Link>
        <Link className="mr-7" to={"/"}>
          Match Highlights: Argentina vs Brazil — as it happened !
        </Link>
        <Link className="mr-7" to={"/"}>
          Match Highlights: Germany vs Spain — as it happened !
        </Link>
        <Link className="mr-7" to={"/"}>
          Match Highlights: Argentina vs Brazil — as it happened !
        </Link>
        <Link className="mr-7" to={"/"}>
          Match Highlights: Germany vs Spain — as it happened !
        </Link>
        <Link className="mr-7" to={"/"}>
          Match Highlights: Argentina vs Brazil — as it happened !
        </Link>
        <Link className="mr-7" to={"/"}>
          Match Highlights: Germany vs Spain — as it happened !
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
