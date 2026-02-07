import { NavLink } from "react-router-dom"
import {
  FiHome,
  FiUsers,
  FiPaperclip,
  FiLink,
  FiDollarSign,
} from "react-icons/fi";

const routes = [
  { id: 1, title: "Dashboard", path: "/", Icon: FiHome },
  { id: 2, title: "Team", path: "/team", Icon: FiUsers },
  { id: 3, title: "Invoices", path: "/invoices", Icon: FiPaperclip },
  { id: 4, title: "Integrations", path: "/integrations", Icon: FiLink },
  { id: 5, title: "Finances", path: "/finances", Icon: FiDollarSign },
];



const RouteSelect = () => {
  return (
    <div>
      {routes.map(({ id, title, path, Icon }) => (
        <NavLink
          key={id}
          to={path}
          className={({isActive}) => `flex items-center w-full rounded-md gap-4
          p-3  transition  ${isActive? 'bg-gray-800 text-white shadow': ' text-gray-400 hover:text-gray-500'}`}
        >
          <Icon className="w-5 h-5" />
          <span className="ml-2 text-sm">{title}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default RouteSelect
