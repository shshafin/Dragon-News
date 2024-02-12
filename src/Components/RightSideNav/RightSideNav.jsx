import Zone from "./Zone/Zone";
import Find from "./Find/Find";
import Login from "./Login/Login";
import Ad from "./Ad/Ad";

const RightSideNav = () => {
  return (
    <div>
      <div>
        <Login></Login>
      </div>
      <div className="mt-9">
        <Find></Find>
      </div>
      <div className="mt-6">
        <Zone></Zone>
      </div>
      <div className="my-6">
        <Ad></Ad>
      </div>
    </div>
  );
};

export default RightSideNav;
