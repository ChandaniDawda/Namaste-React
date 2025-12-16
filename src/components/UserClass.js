import React from 'react';

class UserClass extends React.Component {
    constructor(props){  //
        super(props); // to call the parent class constructor
       
        this.state = {

          userInfo : {
            name : "Dummy Name",
            location : "Default"
         
          },

   };

        //console.log("Child Constructor");
    }





    async componentDidMount() {
        // best place to make API calls
        // console.log(this.props.name + "Child Component Did Mount");

        const data = await fetch("https://api.github.com/users/ChandaniDawda");
        const json = await data.json();
        console.log(json);

        this.setState({
          userInfo : json,
        });
    }





render () {

    
    
  const {name, location, avatar_url} = this.state.userInfo;
    // console.log(this.props.name + "Child Render");
    
  return (
    <div className="user-card"> 
       <img src = {avatar_url}/>
      <h2>Name : {name} </h2>  
      <h3>Location :{location}</h3> 
      <h4>Contact : @Chandani </h4> 
    </div>
  );
}

}



export default UserClass;