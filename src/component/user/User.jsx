import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Userdetails from "../userdetails/Userdetails";

export default function User() {
  const user = useLoaderData();
  return (
    <div>
      <h1 className="mt-10 text-2xl ">Our Fantastic User </h1>

      <h2 className="text-4xl font-bold">Total user : {user.length}</h2>

      <div className="grid grid-cols-3 gap-5 mt-10">
        {user.map((user) => (
          <Userdetails user={user}> </Userdetails>
        ))}
      </div>
    </div>
  );
}
