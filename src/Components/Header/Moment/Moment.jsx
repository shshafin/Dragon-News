import moment from "moment";

const Moment = () => {
  return (
    <div className="flex gap-1 justify-center font-semibold text-lg">
      <h1>{moment().format("dddd")},</h1>
      <h1 className="text-gray-500">{moment().format("MMMM D, YYYY")}</h1>
    </div>
  );
};

export default Moment;
