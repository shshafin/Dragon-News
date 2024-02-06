import BreakingNews from "./BreakingNews/BreakingNews";
import Moment from "./Moment/Moment";

const Header = () => {
  return (
    <div>
      <div className="my-7 text-center space-y-3 ">
        <img
          className="mx-auto"
          src={`https://i.imgur.com/ihHd20r.png`}
          alt=""
        />

        <h1 className="text-[#706F6F]">Journalism Without Fear or Favour</h1>
        <Moment></Moment>
      </div>
      <BreakingNews></BreakingNews>
    </div>
  );
};

export default Header;
