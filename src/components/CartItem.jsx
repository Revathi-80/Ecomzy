import React from "react";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice.js";

const CartItem = ({ item, index }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed from cart");
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center border-b-2 border-slate-500 ">
        <div className="w-[30%]">
          <img src={item.image} alt="img" />
        </div>
        <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
          <h1 className="text-slate-700 text-xl font-semibold">{item.title}</h1>
          <h1 className="text-base text-slate-700 font-medium">
            {item.description.split(" ").slice(0, 15).join(" ") + "..."}
          </h1>
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-green-600">${item.price}</p>
            <div
              className=" bg-red-200 group hover:bg-red-400
           transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
              onClick={removeFromCart}
            >
              <MdDelete className="text-red-800 group-hover:text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
