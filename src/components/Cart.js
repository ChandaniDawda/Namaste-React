import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
    
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    const dispatch = useDispatch(); 
    

    const handleClearCart = () => {
        // Dispatch an action to clear the cart
        dispatch(clearCart());
    }

    return (
        <div className="m-4 p-4">
            <h1 className="text-3xl font-bold m-4 p-4">This is Cart Page</h1>
            <div className="cart-items-list m-4 p-4 border border-gray-400">
                <button className="p-2 m-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                
                onClick={handleClearCart}

                >
                    Clear Cart
            </button>

            {cartItems.length === 0 ? (
                <h2 className="text-xl font-semibold">Your cart is empty</h2>
            ) : (
                <h2 className="text-xl font-semibold">You have {cartItems.length} items in your cart</h2>
            )}
         
             <ItemList items= {cartItems}/>

            </div>
        </div>
    );
};

export default Cart;
