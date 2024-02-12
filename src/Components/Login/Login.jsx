import { Card, Input, Button, Typography } from "@material-tailwind/react";
import Menubar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    console.log(form.get("email"));
  };

  return (
    <div>
      <Menubar></Menubar>

      <div className=" flex justify-center items-center h-[80vh] bg-gray-200">
        <Card
          className="bg-white py-5 px-10 rounded-sm"
          color="transparent"
          shadow={false}
        >
          <Typography
            className="text-center font-bold my-7"
            variant="h4"
            color="blue-gray"
          >
            Login your account
          </Typography>

          <hr />

          <form
            onSubmit={handleLogin}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Email
              </Typography>
              <Input
                size="lg"
                name="email"
                type="email"
                placeholder="Enter your email address"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: " before:content-none after:content-none ",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Password
              </Typography>
              <Input
                type="password"
                name="password"
                size="lg"
                placeholder="Enter your password"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>

            <Button
              type="submit"
              className="mt-6 bg-gray-800 rounded-sm"
              fullWidth
            >
              Login
            </Button>
            <Typography color="gray" className="mt-4 text-center font-bold">
              Do not have an account?{" "}
              <Link to={"/register"}>
                <a className=" text-red-700" href="">
                  Register
                </a>
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
