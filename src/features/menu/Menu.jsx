/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
function Menu() {
  const menu = useLoaderData();
  return (
    <ul className="divide-y divide-stone-300 px-2 ">
      {menu.map((pizza) => {
        return <MenuItem key={pizza.id} pizza={pizza}></MenuItem>;
      })}
    </ul>
  );
}

export async function loader() {
  const res = await getMenu();
  return res;
}

export default Menu;
