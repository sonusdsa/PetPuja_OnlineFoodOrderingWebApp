import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Dummy name",
    email: "dummy@gamil.com",
  },
});
UserContext.displayName = "UserContext";
export default UserContext;
