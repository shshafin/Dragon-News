import { useEffect, useState } from "react";
import News from "./News/News";
import { Button } from "@material-tailwind/react";

const MiddleNav = () => {
  const [cards, setCards] = useState([]);
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    fetch("/public/Data/news.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div>
      {isShow ? (
        <div>
          {cards.map((card) => (
            <News key={card.id} card={card}></News>
          ))}
        </div>
      ) : (
        <div>
          {cards.slice(0, 3).map((card) => (
            <News key={card.id} card={card}></News>
          ))}
        </div>
      )}
      <div className="text-center my-5">
        <Button onClick={() => setIsShow(!isShow)}>
          {isShow ? "Show Less" : "Show More"}
        </Button>
      </div>
    </div>
  );
};

export default MiddleNav;
