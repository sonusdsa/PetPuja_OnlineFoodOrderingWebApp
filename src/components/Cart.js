import { useSelector, useDispatch } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handlClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <button
        className=" bg-green-200 font-bold p-2 m-10 rounded"
        onClick={() => handlClearCart()}
      >
        clearCart
      </button>
      <div className="flex">
        {cartItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default Cart;
