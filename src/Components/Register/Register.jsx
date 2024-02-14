import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import Menubar from "../Navbar/Navbar";
import UseAuth from "../../Hook/useAuth";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser } = UseAuth();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const name = form.get("name");
    const password = form.get("password");
    const photo = form.get("photo");

    console.log(email, password, photo, name);

    // email password login
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("Successfully registered!");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("registration failed!");
      });
  };

  return (
    <div>
      <Menubar></Menubar>
      <div className=" flex justify-center items-center h-[90vh] bg-gray-200">
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
            Register your account
          </Typography>
          <hr />
          <form
            onSubmit={handleRegister}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Name
              </Typography>
              <Input
                size="lg"
                name="name"
                placeholder="Enter your name"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Photo URL
              </Typography>
              <Input
                size="lg"
                name="photo"
                placeholder="Enter your Photo URL"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Email
              </Typography>
              <Input
                size="lg"
                name="email"
                placeholder="Enter your email"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
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
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  Accept
                  <a
                    href="#"
                    className="font-semibold transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms & Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button type="submit" className="mt-6 bg-gray-800" fullWidth>
              Register
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Register;
