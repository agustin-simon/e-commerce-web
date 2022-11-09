import { FaHome, FaUserAlt } from "react-icons/fa";
import { GiConverseShoe } from "react-icons/gi";
import { ImUsers } from "react-icons/im";
import { IoIosExit } from "react-icons/io";

const listItems = [
  {
    name: "Home",
    url: "/home",
    menu: false,
    icon: FaHome,
  },
  {
    name: "Products",
    subs: ["Balls", "Shoes"],
    url: "/balls",
    menu: true,
    icon: GiConverseShoe,
  },
  {
    name: "About us",
    url: "/about-us",
    menu: false,
    icon: ImUsers,
  },
  {
    name: "My Account",
    url: "/profile-login",
    menu: false,
    icon: FaUserAlt,
  },
  {
    name: "Exit",
    url: "/home",
    menu: false,
    icon: IoIosExit,
  },
];

export default listItems;
