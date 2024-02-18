import { FaRegCalendarAlt } from "react-icons/fa";
import Header from "../../../Header/Header";
import RightSideNav from "../../../RightSideNav/RightSideNav";
import moment from "moment";
import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { GoArrowLeft } from "react-icons/go";

const NewsDetail = () => {
  const [newses, setNewses] = useState([]);

  const product = useLoaderData();
  const { _id } = useParams();
  const result = product.find((pro) => pro._id == _id);
  const { title, image_url, details } = result || {};

  useEffect(() => {
    fetch("/public/Data/news.json")
      .then((res) => res.json())
      .then((data) => setNewses(data));
  }, []);

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };

  return (
    <div>
      <Header></Header>
      <h1 className=" mt-6 text-xl font-semibold text-gray-900">Dragon News</h1>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-5 mt-7 ">
        <div className="md:col-span-3 border rounded-md p-4">
          <img src={image_url} alt="" />
          <h1 className="text-2xl font-semibold text-gray-800 my-3 leading-10">
            {title}
          </h1>
          <p className="text-gray-700 leading-7">{details}</p>
          <Button
            onClick={handleNavigate}
            className="flex items-center justify-center gap-2 my-7 text-sm bg-pink-600 "
          >
            <span className="text-xl">
              <GoArrowLeft></GoArrowLeft>
            </span>
            All news in this category
          </Button>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
      <div className="flex gap-7 my-5">
        {newses.slice(0, 3).map((news) => (
          <div className="" key={news._id}>
            <img className="h-48 w-80 " src={news.image_url} alt="" />
            <h1 className="text-base w-80 font-semibold my-2">{news.title}</h1>
            <div className="flex gap-4 items-center">
              <h1 className="font-medium text-base">{news.author.name}</h1>
              <span className="flex items-center gap-2">
                <FaRegCalendarAlt className="text-gray-500" />
                <h1 className="text-gray-500">
                  {moment().format("MMMM D, YYYY")}
                </h1>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsDetail;
