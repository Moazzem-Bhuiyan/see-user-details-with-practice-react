import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Userdetails from "../userdetails/Userdetails";
import User from "../user/User";

export default function Home() {
  return (
    <div>
      <Header></Header>

      <h1 className="text-4xl font-bold mt-10">Hello I am Home page</h1>

      <Outlet></Outlet>
    </div>
  );
}
