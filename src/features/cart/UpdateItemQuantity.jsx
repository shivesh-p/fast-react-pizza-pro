import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import {
  decreaseItemQuantity,
  getCurrentQuantityById,
  increaseItemQuantity,
} from "./cartSlice";

export default function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
        type={"round"}
      >
        +
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
        type={"round"}
      >
        -
      </Button>
    </div>
  );
}
