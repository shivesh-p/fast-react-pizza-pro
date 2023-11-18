import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

export default function AppLayout() {
  //global loading state from navigation
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      {isLoading && <Loader></Loader>}
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
      <CartOverview></CartOverview>
    </div>
  );
}
