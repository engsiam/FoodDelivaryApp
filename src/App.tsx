import { Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./pages/Checkout";
import AllFoodCategories from "./pages/All-Food-Categories";
import BowlDetails from "./pages/Avocado-Quinoa-Bowl-Details";
import SignUp from "./pages/Create-Account-Sign-Up";
import FavoritesSalad from "./pages/FavoritesSalad-Selection";
import FoodSearch from "./pages/Food-Search-&-Filter";
import CartReview from "./pages/Green-Garden-Cart-Review";
import HomePage from "./pages/Home-Page-with-Food-Features";
import SaladCategory from "./pages/Salads-Category-Page";
import Cart from "./pages/Shopping-Cart";
import Login from "./pages/User-Login-Page";
import Profile from "./pages/User-Profile-Page";
import Menu from "./pages/Restaurant-Menu";




function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/details" element={<BowlDetails />} />
      <Route path="/favoritesSalad" element={<FavoritesSalad />} />
      <Route path="/foodSearch" element={<FoodSearch />} />
      <Route path="/cartReview" element={<CartReview />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/category" element={<AllFoodCategories />} />
      <Route path="/saladCategory" element={<SaladCategory />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
