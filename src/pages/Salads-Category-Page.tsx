import React, { useState } from "react";
import App from "../App";
import AppNavigation from "../components/AppNavigation";
import BakcButtob from "../components/BakcButtob";
import { Link } from "react-router-dom";
const SaladCategory: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeSort, setActiveSort] = useState("Popular");
  const [cartItems, setCartItems] = useState<Record<string, number>>({});
  const [favorites, setFavorites] = useState<number[]>([]);
  const filters = ["All", "Vegan", "Gluten-free"];
  const sortOptions = ["Popular", "Price: Low to High", "Price: High to Low"];
  const salads = [
    {
      id: 1,
      name: "Mediterranean Quinoa Salad",
      description:
        "Fresh quinoa with cucumber, tomatoes, olives, feta cheese, and lemon dressing",
      price: 12.99,
      image:
        "https://readdy.ai/api/search-image?query=Fresh%20Mediterranean%20quinoa%20salad%20with%20cucumber%2C%20tomatoes%2C%20olives%2C%20feta%20cheese%20in%20a%20white%20bowl%2C%20vibrant%20colors%2C%20top-down%20view%2C%20professional%20food%20photography%20on%20light%20background%2C%20clean%20presentation%2C%20appetizing%20healthy%20meal%2C%20no%20text%2C%20high%20resolution%20image&width=200&height=200&seq=101&orientation=squarish",
      isVegan: false,
      isGlutenFree: true,
      popularity: 4.8,
    },
    {
      id: 2,
      name: "Avocado Kale Caesar",
      description:
        "Crisp kale, avocado, plant-based parmesan, and creamy vegan caesar dressing",
      price: 14.5,
      image:
        "https://readdy.ai/api/search-image?query=Avocado%20kale%20caesar%20salad%20with%20plant-based%20parmesan%20and%20creamy%20dressing%20in%20a%20white%20bowl%2C%20vibrant%20green%20colors%2C%20top-down%20view%2C%20professional%20food%20photography%20on%20light%20background%2C%20clean%20presentation%2C%20appetizing%20healthy%20meal%2C%20no%20text%2C%20high%20resolution%20image&width=200&height=200&seq=102&orientation=squarish",
      isVegan: true,
      isGlutenFree: true,
      popularity: 4.6,
    },
    {
      id: 3,
      name: "Grilled Chicken Cobb",
      description:
        "Grilled chicken breast, bacon, blue cheese, hard-boiled eggs, and avocado",
      price: 15.99,
      image:
        "https://readdy.ai/api/search-image?query=Grilled%20chicken%20cobb%20salad%20with%20bacon%2C%20blue%20cheese%2C%20hard-boiled%20eggs%2C%20and%20avocado%20in%20a%20white%20bowl%2C%20colorful%20ingredients%20arranged%20neatly%2C%20top-down%20view%2C%20professional%20food%20photography%20on%20light%20background%2C%20clean%20presentation%2C%20appetizing%20meal%2C%20no%20text%2C%20high%20resolution%20image&width=200&height=200&seq=103&orientation=squarish",
      isVegan: false,
      isGlutenFree: true,
      popularity: 4.9,
    },
    {
      id: 4,
      name: "Thai Crunch Salad",
      description:
        "Shredded cabbage, carrots, edamame, with peanut dressing and crispy wonton strips",
      price: 13.75,
      image:
        "https://readdy.ai/api/search-image?query=Thai%20crunch%20salad%20with%20shredded%20cabbage%2C%20carrots%2C%20edamame%2C%20peanut%20dressing%20and%20crispy%20wonton%20strips%20in%20a%20white%20bowl%2C%20vibrant%20colors%2C%20top-down%20view%2C%20professional%20food%20photography%20on%20light%20background%2C%20clean%20presentation%2C%20appetizing%20Asian%20fusion%20meal%2C%20no%20text%2C%20high%20resolution%20image&width=200&height=200&seq=104&orientation=squarish",
      isVegan: false,
      isGlutenFree: false,
      popularity: 4.5,
    },
    {
      id: 5,
      name: "Harvest Grain Bowl",
      description:
        "Mixed grains, roasted sweet potatoes, apple slices, cranberries, and maple vinaigrette",
      price: 13.25,
      image:
        "https://readdy.ai/api/search-image?query=Harvest%20grain%20bowl%20with%20mixed%20grains%2C%20roasted%20sweet%20potatoes%2C%20apple%20slices%2C%20cranberries%2C%20and%20maple%20vinaigrette%20in%20a%20white%20bowl%2C%20autumn%20colors%2C%20top-down%20view%2C%20professional%20food%20photography%20on%20light%20background%2C%20clean%20presentation%2C%20appetizing%20healthy%20meal%2C%20no%20text%2C%20high%20resolution%20image&width=200&height=200&seq=105&orientation=squarish",
      isVegan: true,
      isGlutenFree: false,
      popularity: 4.3,
    },
    {
      id: 6,
      name: "Citrus Shrimp Salad",
      description:
        "Grilled shrimp, mixed greens, grapefruit segments, avocado, and citrus vinaigrette",
      price: 16.5,
      image:
        "https://readdy.ai/api/search-image?query=Citrus%20shrimp%20salad%20with%20mixed%20greens%2C%20grapefruit%20segments%2C%20avocado%2C%20and%20citrus%20vinaigrette%20in%20a%20white%20bowl%2C%20bright%20fresh%20colors%2C%20top-down%20view%2C%20professional%20food%20photography%20on%20light%20background%2C%20clean%20presentation%2C%20appetizing%20seafood%20meal%2C%20no%20text%2C%20high%20resolution%20image&width=200&height=200&seq=106&orientation=squarish",
      isVegan: false,
      isGlutenFree: true,
      popularity: 4.7,
    },
  ];
  const filteredSalads = salads
    .filter((salad) => {
      if (activeFilter === "All") return true;
      if (activeFilter === "Vegan") return salad.isVegan;
      if (activeFilter === "Gluten-free") return salad.isGlutenFree;
      return true;
    })
    .sort((a, b) => {
      if (activeSort === "Popular") {
        return b.popularity - a.popularity;
      }
      if (activeSort === "Price: Low to High") {
        return a.price - b.price;
      }
      if (activeSort === "Price: High to Low") {
        return b.price - a.price;
      }
      return 0;
    });
  const addToCart = (id: number) => {
    setCartItems((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };
  const removeFromCart = (id: number) => {
    setCartItems((prev) => {
      const newItems = { ...prev };
      if (newItems[id] > 1) {
        newItems[id] -= 1;
      } else {
        delete newItems[id];
      }
      return newItems;
    });
  };
  return (
    <div className="relative h-screen w-full max-w-[375px] mx-auto bg-gray-50 overflow-y-auto">
      {/* Status Bar */}
      <div className="fixed top-0 w-full z-50 bg-black text-white px-4 py-2 flex justify-between items-center max-w-[375px]">
        <span className="text-sm font-medium">9:41</span>
        <div className="flex items-center space-x-2">
          <i className="fas fa-signal"></i>
          <i className="fas fa-wifi"></i>
          <i className="fas fa-battery-full"></i>
        </div>
      </div>
      {/* Navigation Bar */}
      <div className="fixed top-8 left-0 right-0 z-40 bg-white py-3 px-4 flex justify-between items-center shadow-sm max-w-[375px] mx-auto">
        <div className="flex items-center">
          <BakcButtob />
          <h1 className="text-lg font-semibold text-gray-800">Salads</h1>
        </div>
        <div className="relative cursor-pointer">
        <Link to="/cart">
          <i className="fas fa-shopping-cart text-gray-800"></i>
          </Link>
          {Object.values(cartItems).reduce((a, b) => a + b, 0) > 0 && (
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {Object.values(cartItems).reduce((a, b) => a + b, 0)}
            </span>
          )}
        </div>
      </div>
      {/* Main Content */}
      <div className="pt-24 px-4 pb-24">
        {/* Filter Section */}
        <div className="mb-6">
          <div className="overflow-x-auto pb-2">
            <div className="flex space-x-2 mb-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                    activeFilter === filter
                      ? "bg-green-500 text-white"
                      : "bg-white text-gray-700 border border-gray-200"
                  } !rounded-button`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="flex space-x-2">
              {sortOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => setActiveSort(option)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                    activeSort === option
                      ? "bg-green-100 text-green-700 border border-green-200"
                      : "bg-white text-gray-700 border border-gray-200"
                  } !rounded-button`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* Salad Grid */}
        <div className="grid grid-cols-2 gap-4">
          {filteredSalads.map((salad) => (
            <div
              key={salad.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden transform transition duration-200 hover:shadow-md"
            >
              <div className="relative h-36 overflow-hidden">
                <img
                  src={salad.image}
                  alt={salad.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-2 right-2 flex space-x-1">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(salad.id);
                    }}
                    className="bg-white bg-opacity-90 w-8 h-8 rounded-full flex items-center justify-center shadow-sm transition-transform duration-200 hover:scale-105 !rounded-button"
                  >
                    <i
                      className={`${
                        favorites.includes(salad.id) ? "fas" : "far"
                      } fa-heart text-red-500`}
                    ></i>
                  </button>
                  {salad.isVegan && (
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                      <i className="fas fa-leaf mr-1"></i>
                      Vegan
                    </span>
                  )}
                  {salad.isGlutenFree && (
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                      <i className="fas fa-wheat-alt mr-1 fa-slash"></i>
                      GF
                    </span>
                  )}
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-bold text-gray-800 mb-1 line-clamp-1">
                  {salad.name}
                </h3>
                <p className="text-gray-600 text-xs mb-2 line-clamp-2">
                  {salad.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-bold">
                    ${salad.price.toFixed(2)}
                  </span>
                  {cartItems[salad.id] ? (
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => removeFromCart(salad.id)}
                        className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white !rounded-button"
                      >
                        <i className="fas fa-minus text-xs"></i>
                      </button>
                      <span className="text-sm font-medium">
                        {cartItems[salad.id]}
                      </span>
                      <button
                        onClick={() => addToCart(salad.id)}
                        className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white !rounded-button"
                      >
                        <i className="fas fa-plus text-xs"></i>
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => addToCart(salad.id)}
                      className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white !rounded-button"
                    >
                       <i className="fas fa-plus text-xs"></i>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {filteredSalads.length === 0 && (
          <div className="flex flex-col items-center justify-center mt-10 py-8">
            <i className="fas fa-salad text-gray-300 text-5xl mb-4"></i>
            <p className="text-gray-500 text-center">
              No salads found matching your filters
            </p>
            <button
              onClick={() => {
                setActiveFilter("All");
                setActiveSort("Popular");
              }}
              className="mt-4 text-green-500 font-medium cursor-pointer !rounded-button"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
      {/* Tab Bar */}
     <AppNavigation />
    </div>
  );
};
export default SaladCategory;
