import useContext from "react";
import { ID1_URL } from "../utils/constants";
import { ID2_URL } from "../utils/constants";
import { ID3_URL } from "../utils/constants";
import { ID4_URL } from "../utils/constants";
import { ID5_URL } from "../utils/constants";
import userContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {loggedInUser} = useContext(userContext);



    const {

        cloudinaryImageId,
        name,
        avgRating,
        cuisines=[],
        costForTwo, 
        deliveryTime } = resData?.info || {};

        const IMG_CDN_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

    return (
        <div className="res-card  m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200" > 

            <img className ="res-logo rounded-lg"
            alt = "res-logo" 
            src =  {cloudinaryImageId
            ? IMG_CDN_URL + cloudinaryImageId
            : "https://via.placeholder.com/200"}

            />

            <h3 className= "font-bold py-4 text-xl">{name}</h3>
            <h4>{cuisines.join (",")}</h4>
            <h4>{avgRating} ⭐</h4>
            <h4>{costForTwo} FOR TWO</h4>
            <h4>{deliveryTime} mins</h4>
            <h4>User :{loggedInUser} </h4>   

        </div>
    );
};

// Higher Order Component (HOC) - A function that takes a component as input and returns an enhanced component
// input- RestaurantCard ==> RestaurantCard promoted by HOC
// output- EnhancedRestaurantCard

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return ( 
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded">Promoted</label>
                <RestaurantCard {...props} />
            </div>
        );
    };
};

export default RestaurantCard;