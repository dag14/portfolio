import { FaLaptopCode } from "react-icons/fa";

const Landing = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-bg-light-gray">
      <div className="flex-col">
        <FaLaptopCode
          size={150}
          className="flex justify-center m-2 text-text-charcoal-gray"
        />
      </div>

      <h1 className="flex justify-center text-4xl font-bold">Dagim Asrat</h1>
    </div>
  );
};
export default Landing;
