import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import swal from "sweetalert";

const Home = () => {
  const menuItems = [];

  const cardStyle =
    "rounded-md overflow-hidden shadow-lg bg-white h-56 hover:cursor-pointer transition duration-300 ease-in-out hover:scale-110";
  const textStyle = "text-center font-bold text-xl mt-6";

  return (
    <div className="md:h-screen">
      <Header />
      <div className="flex items-center justify-center bg-gray-50 lg:h-5/6 pt-3">
        <div className="flex flex-col border-2 w-3/6 md:h-full lg:h-5/6 rounded-md shadow-lg bg-gray-200">
          <div className="text-4xl text-center mt-6 font-bold text-blue-500">
            <h1>QA Assistant</h1>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12 h-3/4 p-10 mt-2">
            <div className={cardStyle}>
              <Link to={"/patient-search"}>
                <img
                  className="w-full"
                  src="src/public/search.png"
                  alt="patient search"
                ></img>
                <h1 className={textStyle}>Patient Search</h1>
              </Link>
            </div>
            <div className={cardStyle}>
              <img
                className="w-2/4 h-2/4 sm:ml-16 sm:mr-8 md:ml-8 md:ml-8 lg:ml-16 lg:mr-20 mt-8"
                src="src/public/graph.jpeg"
                alt="data dump"
              ></img>
              <h1 className={textStyle}>Data Dump Upload</h1>
            </div>
            <div className={cardStyle}></div>
            <div className={cardStyle}></div>
            <div className={cardStyle}></div>
            <div className={cardStyle}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
