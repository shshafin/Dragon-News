import Header from "../../Components/Header/Header";
import LeftSideNav from "../../Components/LeftSideNav/LeftSideNav";
import Navbar from "../../Components/Navbar/Navbar";
import RightSideNav from "../../Components/RightSideNav/RightSideNav";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <h1 className="text-2xl">Home</h1>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
        <div className="border">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="border col-span-2">
          <h1 className="text-2xl">Center text</h1>
        </div>
        <div className="border">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
