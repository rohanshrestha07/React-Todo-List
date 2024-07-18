import { Link } from "react-router-dom";
import Logo from "../logo/Logo";

export default function Header() {
  const listStyle =
    "list-none float-left text-lg uppercase font-bold cursor-pointer hover:text-[#2C7EE8] ml-28";
  const loginStyle =
    "float-start p-3 mx-1 text-black font-bold cursor-pointer hover:bg-slate-300 hover:rounded-2xl";
  return (
    <div className="container mx-auto bg-slate-200">
      <div className=" w-full h-20 grid grid-flow-col container mx-auto">
        <div className="col-span-2">
          <Logo></Logo>
        </div>
        <div className="col-span-7 mx-[100px]">
          <ul className="text-black float-end mt-5 mx-10">
            <li className={listStyle}>
              <Link to={"home"}>Home</Link></li>

            <li className={listStyle}>
              <Link to={"services"}>Services</Link>
            </li>

            <li className={listStyle}>
              <Link to={"about"}>About</Link>
            </li>

            <li className={listStyle}>
              <Link to={"contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-3">
          <ul className="mt-3 text-center float-end">
            <li className={loginStyle}>Signup</li>
            <li className={loginStyle}>
              <Link to={"login"}>Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
