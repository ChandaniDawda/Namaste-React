import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

 
class About extends Component {


     constructor (props) {
        super (props);
       // console.log("Parent Constructor");
     }

     componentDidMount() {
        // best place to make API calls
        //console.log("Parent Component Did Mount");
    }

    render() {
      //console.log("Parent Render");
        return (
      <div>
        <h1>About Class Component</h1>
        <h2>Welcome to Food Express! We are passionate about delivering delicious meals right to your doorstep. 
        Our mission is to connect food lovers with their favorite restaurants and provide a seamless ordering experience.</h2>
        
        <UserClass name = {"Chandani (classes)"} location = {"Amravati Class"}/>
        </div>
        );
    }
};

export default About;