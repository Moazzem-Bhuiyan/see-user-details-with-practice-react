import React from "react";
import { useNavigate } from "react-router-dom";

export default function Userdetails({ user }) {
  const { id, name, username, email, city } = user;

  const navigate = useNavigate();

  const handleshow = () => {
    navigate(`/user/${id}`);
  };
  return (
    <div>
      <div className="border-4 border-red-300 rounded-lg bg-cayan-300 py-10 text-xl hover:bg-cyan-300 ">
        <h1>{user.name}</h1>

        <h1>{user.username}</h1>

        <h1>{user.id}</h1>

        <h1>{user.city}</h1>

        <h1>{user.email}</h1>

        <h1 className="mt-4">
          {" "}
          <a
            className="bg-purple-500 text-white hover:text-black hover:bg-white  rounded-lg p-1 px-2"
            href={`/user/${id}`}
          >
            See More Details
          </a>
        </h1>

        <button
          className="bg-black text-white p-3 rounded-2xl text-2xl mt-5"
          onClick={handleshow}
        >
          Clik Here
        </button>
      </div>
    </div>
  );
}
