import { FaRegCalendarAlt } from "react-icons/fa";
import Header from "../../../Header/Header";
import RightSideNav from "../../../RightSideNav/RightSideNav";
import moment from "moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NewsDetail = () => {
  const [newses, setNewses] = useState([]);
  //   const { rating, total_view, title, image_url, details, author, _id } =
  //     card || {};

  const { id } = useParams();

  useEffect(() => {
    fetch("/public/Data/news.json")
      .then((res) => res.json())
      .then((data) => setNewses(data));
  }, []);

  return (
    <div>
      <Header></Header>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-5 mt-7 ">
        <div className="md:col-span-3 border rounded-md">
          <h1 className="text-3xl">{id}</h1>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
      <div className="flex gap-7 my-5">
        {newses.slice(0, 3).map((news) => (
          <div className="" key={news.id}>
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
