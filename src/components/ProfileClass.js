import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // Create State
    this.state = {
      userInfo: {
        name: "Dummy name",
        location: "Dummy Location",
      },
    };
    console.log("child- Constructor");
  }

  async componentDidMount() {
    //API calls
    const data = await fetch("https://api.github.com/users/sonusdsa");
    const json = await data.json();
    this.setState({ userInfo: json });
    console.log("child- componentDidMOunt");
  }
  render() {
    const { count } = this.state;
    console.log("child- render");
    return (
      <div>
        <h1>Profile class Component</h1>
        <img src={this.state.userInfo.avatar_url} />
        <p>Name :{this.state.userInfo.name}</p>
        <p>Location :{this.state.userInfo.location}</p>
      </div>
    );
  }
}

export default Profile;
