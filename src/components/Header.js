import { useContext, useState } from "react";
import image from "../assets/image/img1.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => (
  <a href="/">
    <img data-testid="logo" className="w-28 h-28" src={image} alt="img" />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log("Items :", cartItems);

  return (
    <div className="flex items-center justify-between px-4 bg-gray-500 text-white">
      <Title />

      <div className="flex-1">
        <ul className="flex justify-center space-x-4">
          <li>
            <Link className="hover:text-gray-400" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-400" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-400" to="/contact">
              Contact
            </Link>
          </li>

          <li>
            <Link className="hover:text-gray-400" to="/instamart">
              Instamart
            </Link>
          </li>
          <li>
            <Link data-testid="cart" className="hover:text-gray-400" to="/cart">
              Cart - {cartItems.length} items
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center space-x-4">
        <h1 data-testid="onLine-Status">
          {" "}
          Online status {isOnline ? "🟢" : "🔴"}
        </h1>
        <span className=" p-10 font-bold text-xl text-amber-500">
          {user.name}
        </span>
        {isLoggedIn ? (
          <button
            className="px-4 py-2 bg-red-500 rounded hover:bg-red-700"
            onClick={() => setIsLoggedIn(false)}
          >
            Logout
          </button>
        ) : (
          <button
            className="px-4 py-2 bg-green-500 rounded hover:bg-green-700"
            onClick={() => setIsLoggedIn(true)}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
