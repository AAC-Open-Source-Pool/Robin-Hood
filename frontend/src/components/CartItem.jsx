import { Minus, Plus, Trash } from "lucide-react";
import { useCartStore } from "../stores/useCartStore";

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCartStore();

  return (
    <div className="rounded-lg border p-4 shadow-sm border-gray-300 bg-gray-50 md:p-6">
      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
        
        <div className="shrink-0 md:order-1">
          <img
            className="h-20 md:h-32 rounded object-cover border border-gray-300"
            src={item.image}
            alt={item.name}
          />
        </div>

        
        <div className="flex items-center justify-between md:order-3 md:justify-end">
          <div className="flex items-center gap-2">
            <button
              className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-gray-300 bg-white 
              text-maroon-600 hover:bg-maroon-100 focus:outline-none focus:ring-2 focus:ring-maroon-600"
              onClick={() => updateQuantity(item._id, item.quantity - 1)}
            >
              <Minus className="text-maroon-600" />
            </button>
            <p className="text-sm font-semibold text-gray-700">{item.quantity}</p>
            <button
              className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-gray-300 bg-white 
              text-maroon-600 hover:bg-maroon-100 focus:outline-none focus:ring-2 focus:ring-maroon-600"
              onClick={() => updateQuantity(item._id, item.quantity + 1)}
            >
              <Plus className="text-maroon-600" />
            </button>
          </div>
        </div>

       
        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
          <p className="text-base font-medium text-gray-900 hover:text-maroon-600 hover:underline">
            {item.name}
          </p>
          <p className="text-sm text-gray-600">{item.description}</p>
        </div>

        
        <div className="text-end md:order-4 md:w-32">
          <p className="text-base font-bold text-maroon-600">₹{item.price}</p>
          <button
            className="mt-2 inline-flex items-center text-sm font-medium text-maroon-600 hover:text-maroon-500"
            onClick={() => removeFromCart(item._id)}
          >
            <Trash className="mr-1" />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
