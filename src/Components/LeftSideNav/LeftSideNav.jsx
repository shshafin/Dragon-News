import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import BottomNews from "./BottomNews/BottomNews";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`/public/Data/categories.json`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-7">All Category</h1>
      <div className="space-y-7">
        {categories.map((category) => (
          <Link
            key={category.id}
            className="block ml-4 text-xl font-semibold text-gray-600 "
          >
            <NavLink
              to={`category/${category.id}`}
              className={({ isActive, isPending }) =>
                isPending
                  ? ""
                  : isActive
                  ? "bg-gray-300 p-3 text-gray-900"
                  : " "
              }
            >
              {category.name}
            </NavLink>
          </Link>
        ))}
      </div>
      <BottomNews></BottomNews>
    </div>
  );
};

export default LeftSideNav;
