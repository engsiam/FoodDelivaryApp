import React, { useState } from "react";
import AppNavigation from "../components/AppNavigation";
import BakcButtob from "../components/BakcButtob";
import { Link } from "react-router-dom";

const FavoritesSalad: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeSort, setActiveSort] = useState("Recently Added");
  const [favorites, setFavorites] = useState<number[]>([2, 3, 6]); // Pre-populated with some favorites for demo
  const [cartItems, setCartItems] = useState<Record<string, number>>({});

  const filters = ["All", "Vegan", "Gluten-free"];
  const sortOptions = [
    "Recently Added",
    "Price: Low to High",
    "Price: High to Low",
  ];

  const salads = [
    {
      id: 1,
      name: "Mediterranean Quinoa Salad",
      description:
        "Fresh quinoa with cucumber, tomatoes, olives, feta cheese, and lemon dressing",
      price: 12.99,
      image:
        "https://readdy.ai/api/search-image?query=Fresh%2520Mediterranean%2520quinoa%2520salad%2520with%2520cucumber%252C%2520tomatoes%252C%2520olives%252C%2520feta%2520cheese%2520in%2520a%2520white%2520bowl%252C%2520vibrant%2520colors%252C%2520top-down%2520view%252C%2520professional%2520food%2520photography%2520on%2520light%2520background%252C%2520clean%2520presentation%252C%2520appetizing%2520healthy%2520meal%252C%2520no%2520text%252C%2520high%2520resolution%2520image&width=200&height=200&seq=101&orientation=squarish",
      isVegan: false,
      isGlutenFree: true,
      popularity: 4.8,
      dateAdded: new Date("2025-04-10"),
    },
    {
      id: 2,
      name: "Avocado Kale Caesar",
      description:
        "Crisp kale, avocado, plant-based parmesan, and creamy vegan caesar dressing",
      price: 14.5,
      image:
        "https://readdy.ai/api/search-image?query=Avocado%2520kale%2520caesar%2520salad%2520with%2520plant-based%2520parmesan%2520and%2520creamy%2520dressing%2520in%2520a%2520white%2520bowl%252C%2520vibrant%2520green%2520colors%252C%2520top-down%2520view%252C%2520professional%2520food%2520photography%2520on%2520light%2520background%252C%2520clean%2520presentation%252C%2520appetizing%2520healthy%2520meal%252C%2520no%2520text%252C%2520high%2520resolution%2520image&width=200&height=200&seq=102&orientation=squarish",
      isVegan: true,
      isGlutenFree: true,
      popularity: 4.6,
      dateAdded: new Date("2025-04-15"),
    },
    {
      id: 3,
      name: "Grilled Chicken Cobb",
      description:
        "Grilled chicken breast, bacon, blue cheese, hard-boiled eggs, and avocado",
      price: 15.99,
      image:
        "https://readdy.ai/api/search-image?query=Grilled%2520chicken%2520cobb%2520salad%2520with%2520bacon%252C%2520blue%2520cheese%252C%2520hard-boiled%2520eggs%252C%2520and%2520avocado%2520in%2520a%2520white%2520bowl%252C%2520colorful%2520ingredients%2520arranged%2520neatly%252C%2520top-down%2520view%252C%2520professional%2520food%2520photography%2520on%2520light%2520background%252C%2520clean%2520presentation%252C%2520appetizing%2520meal%252C%2520no%2520text%252C%2520high%2520resolution%2520image&width=200&height=200&seq=103&orientation=squarish",
      isVegan: false,
      isGlutenFree: true,
      popularity: 4.9,
      dateAdded: new Date("2025-04-19"),
    },
    {
      id: 4,
      name: "Thai Crunch Salad",
      description:
        "Shredded cabbage, carrots, edamame, with peanut dressing and crispy wonton strips",
      price: 13.75,
      image:
        "https://readdy.ai/api/search-image?query=Thai%2520crunch%2520salad%2520with%2520shredded%2520cabbage%252C%2520carrots%252C%2520edamame%252C%2520peanut%2520dressing%2520and%2520crispy%2520wonton%2520strips%2520in%2520a%2520white%2520bowl%252C%2520vibrant%2520colors%252C%2520top-down%2520view%252C%2520professional%2520food%2520photography%2520on%2520light%2520background%252C%2520clean%2520presentation%252C%2520appetizing%2520Asian%2520fusion%2520meal%252C%2520no%2520text%252C%2520high%2520resolution%2520image&width=200&height=200&seq=104&orientation=squarish",
      isVegan: false,
      isGlutenFree: false,
      popularity: 4.5,
      dateAdded: new Date("2025-04-08"),
    },
    {
      id: 5,
      name: "Harvest Grain Bowl",
      description:
        "Mixed grains, roasted sweet potatoes, apple slices, cranberries, and maple vinaigrette",
      price: 13.25,
      image:
        "https://readdy.ai/api/search-image?query=Harvest%2520grain%2520bowl%2520with%2520mixed%2520grains%252C%2520roasted%2520sweet%2520potatoes%252C%2520apple%2520slices%252C%2520cranberries%252C%2520and%2520maple%2520vinaigrette%2520in%2520a%2520white%2520bowl%252C%2520autumn%2520colors%252C%2520top-down%2520view%252C%2520professional%2520food%2520photography%2520on%2520light%2520background%252C%2520clean%2520presentation%252C%2520appetizing%2520healthy%2520meal%252C%2520no%2520text%252C%2520high%2520resolution%2520image&width=200&height=200&seq=105&orientation=squarish",
      isVegan: true,
      isGlutenFree: false,
      popularity: 4.3,
      dateAdded: new Date("2025-04-12"),
    },
    {
      id: 6,
      name: "Citrus Shrimp Salad",
      description:
        "Grilled shrimp, mixed greens, grapefruit segments, avocado, and citrus vinaigrette",
      price: 16.5,
      image:
        "https://readdy.ai/api/search-image?query=Citrus%2520shrimp%2520salad%2520with%2520mixed%2520greens%252C%2520grapefruit%2520segments%252C%2520avocado%252C%2520and%2520citrus%2520vinaigrette%2520in%2520a%2520white%2520bowl%252C%2520bright%2520fresh%2520colors%252C%2520top-down%2520view%252C%2520professional%2520food%2520photography%2520on%2520light%2520background%252C%2520clean%2520presentation%252C%2520appetizing%2520seafood%2520meal%252C%2520no%2520text%252C%2520high%2520resolution%2520image&width=200&height=200&seq=106&orientation=squarish",
      isVegan: false,
      isGlutenFree: true,
      popularity: 4.7,
      dateAdded: new Date("2025-04-18"),
    },
  ];

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const favoriteSalads = salads.filter((salad) => favorites.includes(salad.id));

  const filteredSalads = favoriteSalads
    .filter((salad) => {
      if (activeFilter === "All") return true;
      if (activeFilter === "Vegan") return salad.isVegan;
      if (activeFilter === "Gluten-free") return salad.isGlutenFree;
      return true;
    })
    .sort((a, b) => {
      if (activeSort === "Recently Added") {
        return b.dateAdded.getTime() - a.dateAdded.getTime();
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
          <h1 className="text-lg font-semibold text-gray-800">Favorites</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative cursor-pointer">
            <i className="fas fa-filter text-gray-700"></i>
          </div>
          <div className="relative cursor-pointer">
            <Link to="/cart">
              <i className="fas fa-shopping-cart text-gray-700"></i>
            </Link>
            {Object.values(cartItems).reduce((a, b) => a + b, 0) > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {Object.values(cartItems).reduce((a, b) => a + b, 0)}
              </span>
            )}
          </div>
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

        {/* Empty State */}
        {favorites.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 px-6">
            <div className="w-32 h-32 mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <img
                src="https://readdy.ai/api/search-image?query=Illustration%2520of%2520an%2520empty%2520salad%2520bowl%2520with%2520a%2520small%2520heart%2520symbol%252C%2520minimalist%2520design%252C%2520soft%2520pastel%2520colors%252C%2520clean%2520lines%252C%2520gentle%2520shadows%252C%2520no%2520text%252C%2520centered%2520composition%252C%2520white%2520background%252C%2520digital%2520illustration%2520style%252C%2520app%2520icon%2520aesthetic%252C%2520food%2520app%2520empty%2520state%2520illustration&width=200&height=200&seq=201&orientation=squarish"
                alt="Empty favorites"
                className="w-24 h-24 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              No favorites yet
            </h3>
            <p className="text-gray-500 text-center mb-6">
              You haven't added any salads to your favorites yet.
            </p>
            <a
              href="https://readdy.ai/home/9c93990c-9578-465a-823a-b16f698483a3/af899f1f-c690-4e03-9968-a27233b9dd5c"
              data-readdy="true"
              className="bg-green-500 text-white px-6 py-3 rounded-full font-medium shadow-sm hover:bg-green-600 transition-colors !rounded-button"
            >
              Browse Salads
            </a>
          </div>
        )}

        {/* Favorites Grid */}
        {favorites.length > 0 && (
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
                  <button
                    onClick={() => toggleFavorite(salad.id)}
                    className="absolute top-2 left-2 bg-white bg-opacity-80 p-2 rounded-full shadow-sm cursor-pointer !rounded-button"
                  >
                    <i className="fas fa-heart text-red-500"></i>
                  </button>
                  <div className="absolute top-2 right-2 flex space-x-1">
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
                          className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 !rounded-button"
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
                        className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium !rounded-button"
                      >
                       <i className="fas fa-plus text-xs"></i>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Results After Filtering */}
        {favorites.length > 0 && filteredSalads.length === 0 && (
          <div className="flex flex-col items-center justify-center mt-10 py-8">
            <i className="fas fa-filter text-gray-300 text-5xl mb-4"></i>
            <p className="text-gray-500 text-center">
              No favorites match your current filters
            </p>
            <button
              onClick={() => {
                setActiveFilter("All");
                setActiveSort("Recently Added");
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

      {/* App Component */}
    </div>
  );
};

export default FavoritesSalad;
