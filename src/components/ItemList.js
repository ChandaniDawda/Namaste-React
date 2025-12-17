    const ItemList = ({ items, dummy }) => {
    console.log(dummy);
    return (
        <div>
            {items.map((item) => (
                <div
                    key={item.card.info.id}
                    className="p-2 m-2 border-b-2 border-gray-200 flex items-center justify-between"
                >
                    <div className="flex-1 ml-4 p-4">
                        <div className="py-2">
                            <span className="font-medium">{item.card.info.name}</span>
                            <span className="text-gray-700"> - ₹ {item.card.info.price ? item.card.info.price / 100 : ''}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">{item.card.info.description}</p>
                    </div>

                    <div className="w-28 h-28 p-2">
                       <div className="absolute">
                        <button className="bg-green-500 text-white p-2 mx-16 py-2 rounded-lg
                         hover:bg-green-600 ">Add+</button>
                        </div> 

                         <img
                            src={
                                'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/' +
                                item.card.info.imageId
                            }
                            className="w-full h-full rounded-lg object-cover"
                            alt={item.card.info.name}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;

 