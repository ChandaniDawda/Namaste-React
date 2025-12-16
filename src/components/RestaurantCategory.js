const RestaurantCategory = ({ data }) => {
    console.log(data);
    return (
        <div>
            {/* Header for the category */}
           <div className="w-full flex justify-between bg-gray-200 p-2 m-2 cursor-pointer">
            <span>{data.title}</span>
            <span>⬇️</span>
           </div>
            {/* Accordion Body */}
            </div>
    );
};

export default RestaurantCategory;  