import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom"; 
import useOnlineStatus from "../utils/useOnlineStatus"; 



//✅ Body Component
const Body = () => {

//  

const [listOfRestaurants, setListOfRestaurants] = useState([]);// to hold the restaurant list
const [filteredRestaurant, setFilteredRestaurants] = useState([]);// to hold the filtered restaurant list

const [searchText, setSearchText] = useState("");// to hold the search text

const RestaurantCardPromoted = withPromotedLabel(RestaurantCard); // Enhanced Component

console.log("Body Render"); 

useEffect(() => {
  fetchData();
}, []);// to call the fetchData function when the component mounts

const fetchData = async () => {       

  // API call logic can be added here in future
  const data = await fetch(

  "https://api.allorigins.win/raw?url=" +   encodeURIComponent("https://namastedev.com/api/v1/listRestaurants") );  // fetching data from the API

  const json = await data.json();  // parsing the data to JSON

  console.log(json); // to see the complete data structure

  setListOfRestaurants(json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);// set state with the restaurant list
  setFilteredRestaurants(json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);// set state with the restaurant list

  };


const onlineStatus = useOnlineStatus(); // using the custom hook to get online status
if (onlineStatus === false) {
  return <h1>🔴 You are offline. Please check your internet connection!</h1> 
};

// conditional rendering
 /*  if (listOfRestaurants.length === 0) {
       return <Shimmer />;
 }  // show shimmer effect while data is loading 
                OR 
       this way too written below */

   return listOfRestaurants.length === 0 ? (
   <Shimmer/>  // show shimmer effect while data is loading
    ) : (
   <div className="body">
   <div className="filter flex  justify-center p-4">  
   <div className="search m-4 p-4 px-4 py-4">  
   <div className="search m-4 p-4 px-4 py-4"> 
   <button  className="px-2 bg-green-500 text-white rounded m-2 p-2"
    onClick={() => {
    const filteredList = listOfRestaurants.filter(
    (res) => res.info.avgRating > 4   );
     setFilteredRestaurants(filteredList);
     }}  >   
     Top Rated Restaurants  
     </button> 
     </div>
     <input type= "text"
     data-testid="search-input"
      className = "search-box border border-gray-400 rounded p-2" 
     value = {searchText}  
     onChange={(e) => {
     setSearchText(e.target.value);
     }}
        />

     <button  className="px-2 bg-blue-500 text-white rounded m-2 p-2"  
          onClick ={() => {

          // filter the restaurant cards based on search text and update the UI .i.e set the state
          console.log(searchText);  // to see the search text in console

          const filteredRestaurant = listOfRestaurants.filter((res) =>
          
          res.info.name.toLowerCase().includes(searchText.toLowerCase()) ); // filter logic

          setFilteredRestaurants(filteredRestaurant); // update state with filtered list

      }}   >
      
      Search</button>
    

      </div>
      </div>

      <div className="Res-container flex flex-wrap "> 

      {filteredRestaurant.map((restaurant) => (

      <Link key ={restaurant.info.id} to = {"/restaurant/" + restaurant.info.id} >

            {/**if the restaurant is promoted then add promoted label to it */}

            {restaurant.info.promoted ? (
              
            <RestaurantCardPromoted resData={restaurant} />  ) : (
            
            <RestaurantCard key= {restaurant.info.id} resData={restaurant} /> )}  
          
            </Link>  // passing restaurant data as props

          ))}

      </div>
    </div>
  );
};
export default Body;