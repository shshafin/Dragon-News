import moment from "moment";
import { useEffect, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const BottomNews = () => {
  const [newses, setNewses] = useState([]);

  useEffect(() => {
    fetch("/public/Data/news.json")
      .then((res) => res.json())
      .then((data) => setNewses(data));
  }, []);

  return (
    <div className="space-y-7 mt-12">
      {newses.slice(0, 3).map((news) => (
        <div className="" key={news.id}>
          <img className="h-48 w-80 " src={news.image_url} alt="" />
          <h1 className="text-xl font-semibold my-5">{news.title}</h1>
          <div className="flex gap-4 items-center">
            <h1 className="font-medium text-lg">{news.author.name}</h1>
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
  );
};

export default BottomNews;
