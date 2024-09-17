import { useEffect, useState } from "react";
const Profile = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Api call
    //console.log("useEffect")
  });
  // console.log("render");
  return (
    <div>
      <h2>Profile</h2>
      <p>Name : {props.name}</p>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(1)}>count</button>
    </div>
  );
};

export default Profile;
