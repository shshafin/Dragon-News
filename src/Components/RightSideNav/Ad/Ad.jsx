import { Button } from "@material-tailwind/react";

const Ad = () => {
  return (
    <div className="relative text-white text-center">
      <img className="w-full " src="https://i.imgur.com/cnfoChK.png" alt="" />
      <div className="absolute top-5 right-5 space-y-5 py-14">
        <h1 className="text-4xl font-extrabold leading-normal">
          Create an Amazing Newspaper
        </h1>
        <p className="text-xl leading-10 px-5">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <Button className="bg-pink-700 py-5 text-xl rounded-none">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default Ad;
