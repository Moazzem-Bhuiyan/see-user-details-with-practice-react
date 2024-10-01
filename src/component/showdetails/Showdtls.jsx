import { useLoaderData, useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

export default function Showdtls() {
  const user = useLoaderData();

  const navigate = useNavigate();

  const { name, id, email } = user;

  const Gohandle = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold bg-purple-300  my-6">
        our user details
      </h1>

      <div className="h1 border-2 pb-5 hover:bg-pink-300">
        <button
          className=" hii1 bg-black text-white p-3 rounded-2xl text-2xl"
          onClick={Gohandle}
        >
          {" "}
          <RxCross2 />
        </button>

        <h1 className="text-3xl">Our user name : {name}</h1>
        <h1 className="text-3xl">Our user ID : {id}</h1>
        <h1 className="text-3xl">Our user Email : {email}</h1>
      </div>
    </div>
  );
}
