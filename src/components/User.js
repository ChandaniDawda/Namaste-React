import { useEffect, useState } from "react";   

const User = ({ name }) => {
   const [count, setCount ] = useState(0);  // state variable to hold the count value
   const [count2] = useState(1); // state variable to hold the count2 value
  
   useEffect(() => {  }, []); // empty dependency array means this runs once when component mounts

  
  return (
    <div className="user-card">  
        <h1>Count : {count}</h1> 
        <h1>Count2 : {count2} </h1>
      <h2>Name : {name} </h2>
      <h3>Location : Amravati</h3> 
      <h4>Contact : @Chandani </h4> 
        </div>
  );
};

export default User;