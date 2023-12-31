import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    // Fetch the sorted instructor data from the backend
    fetch("https://summer-camp-server-seven.vercel.app/instructors")
      .then((res) => res.json())
      .then((data) => setInstructors(data.slice(0, 6)));
  }, []);

  return (
    <div>
      <div className=" text-center my-20 ">
        <p className=" text-red-600 text-2xl italic font-serif">
          Welcome to our
        </p>
        <h1 className=" text-5xl font-extrabold py-3">POPULAR INSTRUCTORS</h1>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-3 max-w-screen-xl mx-auto gap-10 my-10">
        {instructors.map((item) => (
          <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure className=" h-80">
                <img
                  className=" w-full h-full object-cover"
                  src={item.image}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body items-center">
                <h2 className="card-title ">{item.name}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
