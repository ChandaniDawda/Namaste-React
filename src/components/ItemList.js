 import {useDispatch } from "react-redux";
 import { addItem } from "../utils/cartSlice";    
    
    const ItemList = ({ items, dummy }) => {
    //console.log(dummy);


    const dispatch = useDispatch();

    const safeItems = (items || []).filter((it) => it && (it.card?.info || it.name || it.id));

    return (
        <div>
            {safeItems.map((item, idx) => {
                const info = item.card?.info ?? item;
                if (!info) return null;
                const price = info.price ? info.price / 100 : '';

                return (
                    <div
                   
                        data-testid="foodItems"
                        key={info.id ?? info.itemId ?? idx}
                        className="p-2 m-2 border-b-2 border-gray-200 flex items-center justify-between"
                    >
                        <div className="flex-1 ml-4 p-4">
                            <div className="py-2">
                                <span className="font-medium">{info.name}</span>
                                <span className="text-gray-700"> - ₹ {price}</span>
                            </div>
                            <p className="text-sm text-gray-600 mt-2">{info.description}</p>
                        </div>

                        <div className="w-28 h-28 p-2">
                           <div className="absolute">
                            <button className="bg-green-500 text-white p-2 mx-16 py-2 rounded-lg hover:bg-green-600"
                             onClick={() => dispatch(addItem(info))}
                             >
                             Add+
                         </button>
                            </div>

                             {info.imageId && (
                                <img
                                    src={
                                        'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/' +
                                        info.imageId
                                    }
                                    className="w-full h-full rounded-lg object-cover"
                                    alt={info.name}
                                />
                             )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ItemList;

 