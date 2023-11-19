import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";
import { getUsername } from "../user/userSlice";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { clearCart, getCart } from "./cartSlice";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const userName = useSelector(getUsername);
  const cart = useSelector(getCart);

  const dispatch = useDispatch();
  //const cart = fakeCart;
  if (!cart.length) return <EmptyCart></EmptyCart>;
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {userName}</h2>

      <ul className="divide-y divide-stone-300 border-b">
        {cart.map((cartItem) => (
          <CartItem item={cartItem} key={cartItem.pizzaId}></CartItem>
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button type={"primary"} to="/order/new">
          Order pizzas
        </Button>
        <Button type={"secondary"} onClick={() => dispatch(clearCart())}>
          Clear Cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
