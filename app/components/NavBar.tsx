// components/NavBar.tsx
import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur text-white z-50 shadow-md">
      <ul className="flex space-x-6 p-4 container mx-auto">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-bold underline" : "hover:underline"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "font-bold underline" : "hover:underline"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/books"
            className={({ isActive }) =>
              isActive ? "font-bold underline" : "hover:underline"
            }
          >
            Books
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
