import { useContext } from "react";
import UserContext from "../utils/UserContext";

// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  const { user } = useContext(UserContext);
  return (
    <div className="flex items-center justify-center p-4 bg-gray-800 text-white">
      <span className="mr-2">Created By</span>
      <i className="fa-solid fa-heart text-red-500 mx-1"></i>
      <a
        href="https://www.linkedin.com/in/sonu-yadav-4931bb215/"
        target="_blank"
        className="hover:text-gray-400 mx-1"
      >
        Sonu Yadav - {user.email}
      </a>
      <i className="fa-solid fa-copyright mx-1"></i>
      <span className="mx-1">{year}</span>
      <strong className="ml-2">PetPuja</strong>
    </div>
  );
};

export default Footer;
