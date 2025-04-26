
import React, { useState } from "react";
const Menu: React.FC = () => {
  const [cartItems, setCartItems] = useState<number>(0);
  const [cartTotal, setCartTotal] = useState<number>(0);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const handleAddToCart = (price: number) => {
    setCartItems((prev) => prev + 1);
    setCartTotal((prev) => prev + price);
  };
  return (
    <div className="relative h-screen w-full max-w-[375px] mx-auto bg-white overflow-y-auto">
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
          <a
            href="https://readdy.ai/home/9c93990c-9578-465a-823a-b16f698483a3/42a4e4ce-5bae-47ce-901c-0cff2924336d"
            data-readdy="true"
          >
            <i className="fas fa-arrow-left text-gray-800 mr-4 cursor-pointer"></i>
          </a>
          <h1 className="text-lg font-semibold text-gray-800">
            Green Garden Cafe
          </h1>
        </div>
        <div>
          <i className="fas fa-search text-gray-800 cursor-pointer"></i>
        </div>
      </div>
      {/* Main Content */}
      <div className="pt-20 pb-24">
        {/* Restaurant Info */}
        <div className="px-4 py-3 bg-white mb-4">
          <div className="flex items-center mb-2">
            <h2 className="text-xl font-bold text-gray-900">
              Green Garden Cafe
            </h2>
            <div className="ml-auto flex items-center">
              <i className="fas fa-star text-yellow-400 text-sm"></i>
              <span className="text-gray-800 font-medium text-sm ml-1">
                4.8
              </span>
              <span className="text-gray-500 text-sm ml-1">(243)</span>
            </div>
          </div>
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <span>Healthy • Vegan</span>
            <span className="mx-2">•</span>
            <span>0.8 km</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <i className="fas fa-clock text-green-500 mr-2"></i>
            <span>Open now: 8:00 AM - 10:00 PM</span>
          </div>
        </div>
        {/* Search Bar */}
        <div className="px-4 mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search menu items..."
              className="w-full py-3 pl-10 pr-4 bg-gray-100 rounded-3xl text-sm border-none focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
          </div>
        </div>
        {/* Menu Categories */}
        <div className="mb-6">
          <div className="px-4 mb-3">
            <h3 className="text-lg font-semibold text-gray-800">Categories</h3>
          </div>
          <div className="flex overflow-x-auto px-4 pb-2 space-x-4 hide-scrollbar">
            {[
              "All",
              "Starters",
              "Main Dishes",
              "Sides",
              "Desserts",
              "Beverages",
            ].map((category) => (
              <div
                key={category}
                className={`flex items-center px-4 py-2 rounded-full cursor-pointer flex-shrink-0 ${
                  activeCategory === category
                    ? "bg-green-500 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                <span className="text-sm font-medium whitespace-nowrap">
                  {category}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Menu Items */}
        <div className="px-4">
          {/* Starters */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Starters
            </h3>
            <div className="space-y-4">
              {[
                {
                  name: "Avocado Toast",
                  description:
                    "Sourdough bread with smashed avocado, cherry tomatoes, and microgreens",
                  price: 8.99,
                  image:
                    "https://readdy.ai/api/search-image?query=Gourmet%2520avocado%2520toast%2520on%2520artisanal%2520sourdough%2520bread%2520with%2520perfectly%2520smashed%2520avocado%252C%2520cherry%2520tomatoes%252C%2520microgreens%252C%2520and%2520a%2520drizzle%2520of%2520olive%2520oil.%2520Professional%2520food%2520photography%2520with%2520natural%2520lighting%2520on%2520a%2520minimalist%2520white%2520plate.%2520Clean%2520styling%2520with%2520no%2520text%2520or%2520watermarks.&width=80&height=80&seq=101&orientation=squarish",
                  isVegetarian: true,
                },
                {
                  name: "Quinoa Salad Cups",
                  description:
                    "Crisp lettuce cups filled with quinoa, diced vegetables, and herb dressing",
                  price: 7.5,
                  image:
                    "https://readdy.ai/api/search-image?query=Fresh%2520lettuce%2520cups%2520filled%2520with%2520colorful%2520quinoa%2520salad%252C%2520diced%2520bell%2520peppers%252C%2520cucumbers%252C%2520and%2520herbs%2520with%2520a%2520light%2520vinaigrette.%2520Professional%2520food%2520photography%2520with%2520natural%2520lighting%2520on%2520a%2520minimalist%2520white%2520plate.%2520Clean%2520styling%2520with%2520no%2520text%2520or%2520watermarks.&width=80&height=80&seq=102&orientation=squarish",
                  isVegetarian: true,
                },
                {
                  name: "Hummus Platter",
                  description:
                    "House-made hummus with crudités and warm pita bread",
                  price: 9.99,
                  image:
                    "https://readdy.ai/api/search-image?query=Artfully%2520arranged%2520hummus%2520platter%2520with%2520creamy%2520chickpea%2520hummus%252C%2520colorful%2520fresh%2520vegetable%2520crudites%252C%2520and%2520warm%2520pita%2520bread.%2520Professional%2520food%2520photography%2520with%2520natural%2520lighting%2520on%2520a%2520minimalist%2520white%2520plate.%2520Clean%2520styling%2520with%2520no%2520text%2520or%2520watermarks.&width=80&height=80&seq=103&orientation=squarish",
                  isVegetarian: true,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex bg-white rounded-xl shadow-sm overflow-hidden"
                >
                  <div className="w-20 h-20 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-3">
                    <div className="flex items-center">
                      <h4 className="font-medium text-gray-800">{item.name}</h4>
                      {item.isVegetarian && (
                        <span className="ml-2 px-1.5 py-0.5 bg-green-100 text-green-700 text-xs rounded-sm">
                          <i className="fas fa-leaf text-xs mr-1"></i>Veg
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-medium text-gray-900">
                        ${item.price.toFixed(2)}
                      </span>
                      <button
                        onClick={() => handleAddToCart(item.price)}
                        className="bg-green-500 text-white text-xs px-3 py-1.5 rounded-3xl !rounded-button flex items-center"
                      >
                        <i className="fas fa-plus text-xs mr-1"></i>
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Main Dishes */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Main Dishes
            </h3>
            <div className="space-y-4">
              {[
                {
                  name: "Buddha Bowl",
                  description:
                    "Brown rice, roasted vegetables, avocado, and tahini dressing",
                  price: 14.99,
                  image:
                    "https://readdy.ai/api/search-image?query=Vibrant%2520Buddha%2520bowl%2520with%2520brown%2520rice%252C%2520perfectly%2520roasted%2520vegetables%252C%2520sliced%2520avocado%252C%2520and%2520drizzled%2520with%2520creamy%2520tahini%2520dressing.%2520Professional%2520food%2520photography%2520with%2520natural%2520lighting%2520on%2520a%2520minimalist%2520white%2520plate.%2520Clean%2520styling%2520with%2520no%2520text%2520or%2520watermarks.&width=80&height=80&seq=104&orientation=squarish",
                  isVegetarian: true,
                },
                {
                  name: "Grilled Salmon Plate",
                  description:
                    "Wild-caught salmon with quinoa and seasonal vegetables",
                  price: 18.5,
                  image:
                    "https://readdy.ai/api/search-image?query=Perfectly%2520grilled%2520salmon%2520fillet%2520with%2520crispy%2520skin%252C%2520served%2520with%2520fluffy%2520quinoa%2520and%2520colorful%2520seasonal%2520vegetables.%2520Professional%2520food%2520photography%2520with%2520natural%2520lighting%2520on%2520a%2520minimalist%2520white%2520plate.%2520Clean%2520styling%2520with%2520no%2520text%2520or%2520watermarks.&width=80&height=80&seq=105&orientation=squarish",
                  isVegetarian: false,
                },
                {
                  name: "Mediterranean Wrap",
                  description:
                    "Whole wheat wrap with falafel, vegetables, and tzatziki sauce",
                  price: 12.99,
                  image:
                    "https://readdy.ai/api/search-image?query=Fresh%2520Mediterranean%2520wrap%2520in%2520whole%2520wheat%2520flatbread%2520filled%2520with%2520crispy%2520falafel%252C%2520fresh%2520vegetables%252C%2520and%2520creamy%2520tzatziki%2520sauce.%2520Professional%2520food%2520photography%2520with%2520natural%2520lighting%2520on%2520a%2520minimalist%2520white%2520plate.%2520Clean%2520styling%2520with%2520no%2520text%2520or%2520watermarks.&width=80&height=80&seq=106&orientation=squarish",
                  isVegetarian: true,
                },
                {
                  name: "Thai Curry Bowl",
                  description:
                    "Coconut curry with tofu, vegetables, and jasmine rice",
                  price: 13.99,
                  image:
                    "https://readdy.ai/api/search-image?query=Aromatic%2520Thai%2520coconut%2520curry%2520with%2520crispy%2520tofu%2520cubes%252C%2520colorful%2520vegetables%252C%2520and%2520fragrant%2520jasmine%2520rice.%2520Professional%2520food%2520photography%2520with%2520natural%2520lighting%2520on%2520a%2520minimalist%2520white%2520plate.%2520Clean%2520styling%2520with%2520no%2520text%2520or%2520watermarks.&width=80&height=80&seq=107&orientation=squarish",
                  isVegetarian: true,
                  isSpicy: true,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex bg-white rounded-xl shadow-sm overflow-hidden"
                >
                  <div className="w-20 h-20 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-3">
                    <div className="flex items-center">
                      <h4 className="font-medium text-gray-800">{item.name}</h4>
                      <div className="flex ml-2">
                        {item.isVegetarian && (
                          <span className="px-1.5 py-0.5 bg-green-100 text-green-700 text-xs rounded-sm mr-1">
                            <i className="fas fa-leaf text-xs mr-1"></i>Veg
                          </span>
                        )}
                        {item.isSpicy && (
                          <span className="px-1.5 py-0.5 bg-red-100 text-red-700 text-xs rounded-sm">
                            <i className="fas fa-pepper-hot text-xs mr-1"></i>
                            Spicy
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-medium text-gray-900">
                        ${item.price.toFixed(2)}
                      </span>
                      <button
                        onClick={() => handleAddToCart(item.price)}
                        className="bg-green-500 text-white text-xs px-3 py-1.5 rounded-3xl !rounded-button flex items-center"
                      >
                        <i className="fas fa-plus text-xs mr-1"></i>
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Sides */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Sides</h3>
            <div className="space-y-4">
              {[
                {
                  name: "Sweet Potato Fries",
                  description: "Crispy sweet potato fries with chipotle aioli",
                  price: 5.99,
                  image:
                    "https://readdy.ai/api/search-image?query=Crispy%2520sweet%2520potato%2520fries%2520with%2520a%2520side%2520of%2520creamy%2520chipotle%2520aioli%2520dipping%2520sauce.%2520Professional%2520food%2520photography%2520with%2520natural%2520lighting%2520on%2520a%2520minimalist%2520white%2520plate.%2520Clean%2520styling%2520with%2520no%2520text%2520or%2520watermarks.&width=80&height=80&seq=108&orientation=squarish",
                  isVegetarian: true,
                },
                {
                  name: "Roasted Vegetables",
                  description:
                    "Seasonal vegetables roasted with herbs and olive oil",
                  price: 6.5,
                  image:
                    "https://readdy.ai/api/search-image?query=Beautifully%2520roasted%2520seasonal%2520vegetables%2520with%2520herbs%2520and%2520a%2520drizzle%2520of%2520olive%2520oil%252C%2520showing%2520caramelized%2520edges.%2520Professional%2520food%2520photography%2520with%2520natural%2520lighting%2520on%2520a%2520minimalist%2520white%2520plate.%2520Clean%2520styling%2520with%2520no%2520text%2520or%2520watermarks.&width=80&height=80&seq=109&orientation=squarish",
                  isVegetarian: true,
                },
                {
                  name: "Quinoa Tabbouleh",
                  description:
                    "Quinoa with parsley, mint, tomatoes, and lemon dressing",
                  price: 5.99,
                  image:
                    "https://readdy.ai/api/search-image?query=Fresh%2520quinoa%2520tabbouleh%2520salad%2520with%2520finely%2520chopped%2520parsley%252C%2520mint%252C%2520diced%2520tomatoes%252C%2520and%2520bright%2520lemon%2520dressing.%2520Professional%2520food%2520photography%2520with%2520natural%2520lighting%2520on%2520a%2520minimalist%2520white%2520plate.%2520Clean%2520styling%2520with%2520no%2520text%2520or%2520watermarks.&width=80&height=80&seq=110&orientation=squarish",
                  isVegetarian: true,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex bg-white rounded-xl shadow-sm overflow-hidden"
                >
                  <div className="w-20 h-20 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-3">
                    <div className="flex items-center">
                      <h4 className="font-medium text-gray-800">{item.name}</h4>
                      {item.isVegetarian && (
                        <span className="ml-2 px-1.5 py-0.5 bg-green-100 text-green-700 text-xs rounded-sm">
                          <i className="fas fa-leaf text-xs mr-1"></i>Veg
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-medium text-gray-900">
                        ${item.price.toFixed(2)}
                      </span>
                      <button
                        onClick={() => handleAddToCart(item.price)}
                        className="bg-green-500 text-white text-xs px-3 py-1.5 rounded-3xl !rounded-button flex items-center"
                      >
                        <i className="fas fa-plus text-xs mr-1"></i>
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* View Cart Button */}
      {cartItems > 0 && (
        <div className="fixed bottom-16 left-0 right-0 px-4 pb-4 max-w-[375px] mx-auto">
          <button className="w-full bg-green-500 text-white py-3 rounded-3xl !rounded-button shadow-lg flex items-center justify-between px-6">
            <div className="flex items-center">
              <div className="bg-white text-green-500 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                <span className="text-xs font-medium">{cartItems}</span>
              </div>
              <a
                href="https://readdy.ai/home/9c93990c-9578-465a-823a-b16f698483a3/3e1ade83-dcea-4a84-9aa4-c66381d50636"
                data-readdy="true"
                className="font-medium text-white"
              >
                View Cart
              </a>
            </div>
            <span className="font-medium">${cartTotal.toFixed(2)}</span>
          </button>
        </div>
      )}
      {/* Tab Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 grid grid-cols-4 max-w-[375px] mx-auto">
        {[
          { icon: "fas fa-home", label: "Home" },
          { icon: "fas fa-search", label: "Search", active: true },
          { icon: "fas fa-heart", label: "Favorites" },
          { icon: "fas fa-user", label: "Profile" },
        ].map((tab, index) => (
          <div
            key={index}
            className={`flex flex-col items-center cursor-pointer ${
              tab.active ? "text-green-500" : "text-gray-500"
            }`}
          >
            <i className={`${tab.icon} text-lg`}></i>
            <span className="text-xs mt-1">{tab.label}</span>
          </div>
        ))}
      </div>
      {/* Custom Styles */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};
export default Menu;
