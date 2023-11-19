import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
import { gettotalCartItems, gettotalCartPrice } from "./cartSlice";

function CartOverview() {
  const totalCartItems = useSelector(gettotalCartItems);
  const totalSumCartItems = useSelector(gettotalCartPrice);

  if (!totalCartItems) return null;
  return (
    <div
      className="flex 
     items-center justify-between bg-stone-800 px-4 py-4 text-sm
     uppercase text-stone-200
     sm:px-6 sm:py-6 md:text-base
     "
    >
      <p
        className="space-x-4
       font-semibold text-stone-300 sm:space-x-6"
      >
        <span>{totalCartItems} pizzas</span>
        <span>{formatCurrency(totalSumCartItems)}</span>
      </p>
      <Link to="/cart" href="#">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
