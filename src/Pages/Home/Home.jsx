import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import LeftSideNav from "../../Components/LeftSideNav/LeftSideNav";
import MiddleNav from "../../Components/MiddleNav/MiddleNav";
import Navbar from "../../Components/Navbar/Navbar";
import RightSideNav from "../../Components/RightSideNav/RightSideNav";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>

      <div className="grid md:grid-cols-4 grid-cols-1 gap-5 ">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
        <div className=" md:col-span-2">
          <h1 className="text-2xl font-bold mb-7">Dragon News Home</h1>
          <MiddleNav></MiddleNav>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
