import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import Profile from "./ProfileClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("parent- constructor");
  }

  componentDidMount() {
    //Best place to make an Api call

    console.log("parent- componentDidMount");
  }

  render() {
    console.log("parent- render");
    return (
      <div>
        <h1>About component</h1>
        <UserContext.Consumer>
          {({ user }) => (
            <h4 className=" border-red-200 font-bold text-xl p-10">
              {user.name}-{user.email}
            </h4>
          )}
        </UserContext.Consumer>
        <p>This is a page thats defind the about pages </p>
        <ProfileFunctionalComponent name={"Sonu Function"} />
        <Profile name={"Sonu Class"} />
      </div>
    );
  }
}

export default About;
