import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
 
  const handleClick = () => {
    setShowIndex();
  };

  return (

    <div>
    {/* Header */}
     <div className="w-6/12 mx-auto bg-gray-50 p-4 my-4">
      <div className="cursor-pointer flex justify-between"  onClick={handleClick}
      
      >
        <span className="font-bold text-lg ">
          {data.title} ({data.itemCards?.length})

        </span>
        <span>⬇️</span>
      </div>

      {/* Body */}

     {showItems && <ItemList items={data.itemCards} dummy={dummy}/>} 
      </div>
    </div>
  );
};

export default RestaurantCategory;
