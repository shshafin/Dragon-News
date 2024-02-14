import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { Link, NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import UseAuth from "../../Hook/useAuth";

function NavList() {
  return (
    <div className="flex justify-center items-center ">
      <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 ">
        <Typography
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className="font-medium text-base"
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            {" "}
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline" : ""
              }
              to={"/"}
            >
              Home
            </NavLink>
          </ListItem>
        </Typography>
        <Typography
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className="font-medium text-base"
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline" : ""
              }
              to={"/career"}
            >
              Career
            </NavLink>
          </ListItem>
        </Typography>
        <Typography
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className="font-medium text-base"
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline" : ""
              }
              to={"/about"}
            >
              About
            </NavLink>
          </ListItem>
        </Typography>
      </List>
    </div>
  );
}

const Menubar = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const { user, LogOut } = UseAuth();
  // signOut
  const handleLogout = () => {
    LogOut()
      .then(() => {
        toast.success("Sign out successfully!");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className="my-2">
      <Navbar className="mx-auto max-w-screen-xl px-0  py-2 md:shadow-none">
        <div className="flex justify-between items-center  text-blue-gray-900  ">
          <div className="hidden lg:block mx-auto md:mr-[30vh] ">
            <NavList />
          </div>
          <div className="gap-2  flex">
            <img
              className="w-8"
              src={"https://i.imgur.com/17pEw13.png"}
              alt=""
            />

            {user ? (
              <Button
                onClick={handleLogout}
                className="rounded-none  md:px-8"
                variant="gradient"
                size="sm"
              >
                Log out
              </Button>
            ) : (
              <Link to={"/login"}>
                <Button
                  className="rounded-none  md:px-8"
                  variant="gradient"
                  size="sm"
                >
                  Log In
                </Button>
              </Link>
            )}
          </div>

          <div className="flex justify-end items-center  ">
            <IconButton
              variant="text"
              color="blue-gray"
              className="lg:hidden"
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <XMarkIcon className="h-6 w-6" strokeWidth={2} />
              ) : (
                <Bars3Icon className="h-6 w-6" strokeWidth={2} />
              )}
            </IconButton>
          </div>
        </div>

        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Menubar;
