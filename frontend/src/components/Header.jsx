import { Link, NavLink } from "react-router-dom";
import Feast9logoclean from "../assets/Feast9logoclean.png";
function Header() {
  return (
    <div className=" bg-cyan-700 text-white h-[100px] w-full flex justify-center justify-between mb-auto fixed ">
      <div>
        <img src={Feast9logoclean} className=" w-48"></img>
      </div>
      <div className=" w-[300px] font-bold flex justify-around items-center border-black-[1px] ">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? " text-yellow-400 hover:underline"
              : "text-white hover:underline"
          }
        >
          <h3> Home</h3>
        </NavLink>

        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive
              ? " text-yellow-400 hover:underline"
              : "text-white hover:underline"
          }
        >
          <h3> About</h3>
        </NavLink>

        <NavLink
          to={"/contactus"}
          className={({ isActive }) =>
            isActive
              ? " text-yellow-400 hover:underline "
              : "text-white hover:underline"
          }
        >
          <h3> Contact</h3>
        </NavLink>

        <NavLink
          to={"/food"}
          className={({ isActive }) =>
            isActive
              ? " text-yellow-400 hover:underline"
              : "text-white hover:underline"
          }
        >
          <h3> Food</h3>
        </NavLink>

        <NavLink
          to={""}
          className={({ isActive }) =>
            isActive
              ? " text-yellow-400 hover:underline"
              : "text-white hover:underline"
          }
        >
          <div className="  w-8 flex flex-col mb-4">
            <div className=" rounded-full bg-white h-4 w-4 ml-3 "></div>

            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M17 16a3 3 0 11-2.83 2H9.83a3 3 0 11-5.62-.1A3 3 0 015 12V4H3a1 1 0 110-2h3a1 1 0 011 1v1h14a1 1 0 01.9 1.45l-4 8a1 1 0 01-.9.55H5a1 1 0 000 2h12zM7 12h9.38l3-6H7v6zm0 8a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2z" />
            </svg>
          </div>
        </NavLink>

      </div>

      <div className=" flex justify-center items-center pr-4 ">
        <Link 
        to={"/login"}
        >
          <button className=" border-white border-[2px] hover:border-yellow-400 hover:text-yellow-400 rounded-md px-2 h-10 font-bold">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
