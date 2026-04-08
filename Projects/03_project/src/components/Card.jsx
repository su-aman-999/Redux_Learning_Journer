import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem, removeCartItem } from "../store/cartSlice";

const foodItems = [
  { id: 1, food: "Pizza", price: "200" },
  { id: 2, food: "Pasta", price: "300" },
  { id: 3, food: "Momos", price: "100" },
  { id: 4, food: "Kebab", price: "2000" },
  { id: 5, food: "Chicken", price: "1200" },
  { id: 6, food: "Panner", price: "2800" },
  { id: 7, food: "Burger", price: "2100" },
  { id: 8, food: "Poha", price: "4200" },
  { id: 9, food: "Rice", price: "100" },
  { id: 10, food: "Daal", price: "300" },
];

export default function Card() {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "10px",
      }}
    >
      {foodItems.map((foodItem) => {
        const [isAdd, setIsAdd] = useState(false);

        return (
          <div
            style={{
              border: "2px solid gray",
              padding: "0px 12px",
              borderRadius: "8px",
              backgroundColor: "#1f1f1f",
            }}
          >
            <h3
              style={{
                border: "2px solid gray",
                borderRadius: "8px",
                padding: "4px 12px",
                backgroundColor: "#001413",
              }}
            >
              {foodItem.food}
            </h3>
            <p>Price: {foodItem.price}</p>
            <button
              style={{
                marginBottom: "8px",
                cursor: "pointer",
                border: "2px solid gray",
                outline: "none",
                borderRadius: "8px",
                padding: "4px 8px",
                backgroundColor: `${isAdd ? "#211300" : "#012100"}`,
              }}
              onClick={() => {
                if (isAdd) {
                  setIsAdd(false);
                  dispatch(removeCartItem({ id: foodItem.id }));
                } else {
                  setIsAdd(true);
                  dispatch(addCartItem(foodItem));
                }
              }}
            >
              {isAdd ? "Remove" : "Add"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
