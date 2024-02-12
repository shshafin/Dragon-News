import { Button } from "@material-tailwind/react";

const Login = () => {
  return (
    <div>
      <h1 className="text-xl font-bold">Login With</h1>
      <div className="space-y-2 mt-4">
        <Button
          size="md"
          variant="outlined"
          color="blue-gray"
          className="flex items-center gap-3 w-full"
        >
          <img
            src="https://docs.material-tailwind.com/icons/google.svg"
            alt="metamask"
            className="h-6 w-6"
          />
          Continue with Google
        </Button>
        <Button
          size="md"
          variant="outlined"
          color="blue-gray"
          className="flex items-center gap-3 bg-black text-white  w-full"
        >
          <img
            className="bg-black w-7"
            src="../../../public/github-seeklogo.svg"
            alt=""
          />
          Continue with Github
        </Button>
      </div>
    </div>
  );
};

export default Login;
