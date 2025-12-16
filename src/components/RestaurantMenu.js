
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

     if (resInfo === null) {
        return <Shimmer />;
    }

    const { name, cuisines, costForTwoMessage } = resInfo?.cards?.[2]?.card?.card?.info || {};

    const itemCards = resInfo?.cards?.[resInfo.cards.length - 1]
            ?.groupedCard?.cardGroupMap?.REGULAR?.cards
                    ?.flatMap((c) => c?.card?.card?.itemCards || []);

    console.log(resInfo?.cards?.[resInfo.cards.length - 1]  ?.groupedCard?.cardGroupMap?.REGULAR?.cards
                    ?.flatMap((c) => c?.card?.card?.itemCards || [])); // to see the menu items

    const categories = resInfo?.cards?.[resInfo.cards.length - 1]
            ?.groupedCard?.cardGroupMap?.REGULAR?.cards
                    ?.filter((c) => c?.["card"]?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");    
    //console.log(categories); // to see the categories            
 
  return (
    <div className= "text-center" >
        <h1 className="font-bold text-xl my-4">{name}</h1>
        <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage} </p>

        {/*categories accordion*/}

        {categories.map((category) => (
          <RestaurantCategory data = {category?.card?.card} />
          
       ))};
      

    </div>
  )
}

export default RestaurantMenu;