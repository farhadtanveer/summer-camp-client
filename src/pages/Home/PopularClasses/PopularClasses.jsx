import { data } from "autoprefixer";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/class")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  return (
    <div>
      <div className=" text-center my-20">
        <p className=" text-red-600 text-2xl italic font-serif">
          Welcome to our
        </p>
        <h1 className=" text-5xl font-extrabold tracking-wider py-3">
          SUMMER CAMP POPULAR CLASSES
        </h1>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-3 max-w-screen-xl mx-auto gap-10 my-10">
        {classes.map((item) => (
          <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  className=" w-full h-80"
                  src={item.classImage}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body items-center">
                <h2 className="card-title ">{item.className}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;