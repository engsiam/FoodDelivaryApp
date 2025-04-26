import React, { useState } from "react";
import AppNavigation from "../components/AppNavigation";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Home");

  // Get current time to display appropriate greeting
  const getCurrentGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  const featuredItems = [
    {
      id: 1,
      name: "Avocado Toast with Poached Eggs",
      image:
        "https://readdy.ai/api/search-image?query=Gourmet%20avocado%20toast%20with%20perfectly%20poached%20eggs%20on%20artisanal%20bread%2C%20garnished%20with%20microgreens%20and%20cherry%20tomatoes%2C%20professional%20food%20photography%20with%20soft%20natural%20lighting%2C%20shallow%20depth%20of%20field%2C%20high-resolution%20detail%2C%20on%20a%20marble%20surface%20with%20minimal%20styling&width=300&height=200&seq=101&orientation=landscape",
      price: 12.99,
      rating: 4.8,
      description: "Freshly made with organic eggs",
      discount: "15% OFF",
    },
    {
      id: 2,
      name: "Mediterranean Bowl",
      image:
        "https://readdy.ai/api/search-image?query=Vibrant%20Mediterranean%20bowl%20with%20falafel%2C%20hummus%2C%20tabbouleh%2C%20olives%2C%20and%20fresh%20vegetables%2C%20arranged%20beautifully%20on%20a%20wooden%20table%2C%20professional%20food%20photography%20with%20natural%20lighting%2C%20high-resolution%20detail%2C%20colorful%20and%20appetizing%20presentation&width=300&height=200&seq=102&orientation=landscape",
      price: 14.5,
      rating: 4.7,
      description: "Healthy and delicious",
      discount: "10% OFF",
    },
    {
      id: 3,
      name: "Grilled Salmon Plate",
      image:
        "https://readdy.ai/api/search-image?query=Perfectly%20grilled%20salmon%20fillet%20with%20lemon%20and%20herbs%2C%20served%20with%20roasted%20vegetables%20and%20quinoa%2C%20professional%20food%20photography%20with%20soft%20natural%20lighting%2C%20shallow%20depth%20of%20field%2C%20high-resolution%20detail%2C%20on%20a%20stylish%20ceramic%20plate%20with%20minimal%20styling&width=300&height=200&seq=103&orientation=landscape",
      price: 18.99,
      rating: 4.9,
      description: "Wild-caught salmon",
      discount: "20% OFF",
    },
  ];

  const popularCategories = [
    {
      name: "Breakfast",
      icon: "https://readdy.ai/api/search-image?query=icon%252C%25203D%2520cartoon%252C%2520Breakfast%2520plate%2520with%2520eggs%2520and%2520toast%252C%2520subject%2520fills%252080%2520percent%2520of%2520frame%252C%2520vibrant%2520colors%2520with%2520soft%2520gradients%252C%2520minimalist%2520design%252C%2520smooth%2520rounded%2520shapes%252C%2520subtle%2520shading%252C%2520no%2520outlines%252C%2520centered%2520composition%252C%2520isolated%2520on%2520white%2520background%252C%2520playful%2520and%2520friendly%2520aesthetic%252C%2520high%2520detail%2520quality%252C%2520clean%2520and%2520modern%2520look%252C%2520single%2520object%2520focus.&width=80&height=80&seq=19&orientation=squarish",
    },
    {
      name: "Salads",
      icon: "https://readdy.ai/api/search-image?query=icon%252C%25203D%2520cartoon%252C%2520Fresh%2520green%2520salad%2520in%2520a%2520bowl%252C%2520subject%2520fills%252080%2520percent%2520of%2520frame%252C%2520vibrant%2520colors%2520with%2520soft%2520gradients%252C%2520minimalist%2520design%252C%2520smooth%2520rounded%2520shapes%252C%2520subtle%2520shading%252C%2520no%2520outlines%252C%2520centered%2520composition%252C%2520isolated%2520on%2520white%2520background%252C%2520playful%2520and%2520friendly%2520aesthetic%252C%2520high%2520detail%2520quality%252C%2520clean%2520and%2520modern%2520look%252C%2520single%2520object%2520focus.&width=80&height=80&seq=3&orientation=squarish",
    },
    {
      name: "Main Dishes",
      icon: "https://readdy.ai/api/search-image?query=icon%252C%25203D%2520cartoon%252C%2520Gourmet%2520main%2520dish%2520with%2520steak%2520and%2520vegetables%252C%2520subject%2520fills%252080%2520percent%2520of%2520frame%252C%2520vibrant%2520colors%2520with%2520soft%2520gradients%252C%2520minimalist%2520design%252C%2520smooth%2520rounded%2520shapes%252C%2520subtle%2520shading%252C%2520no%2520outlines%252C%2520centered%2520composition%252C%2520isolated%2520on%2520white%2520background%252C%2520playful%2520and%2520friendly%2520aesthetic%252C%2520high%2520detail%2520quality%252C%2520clean%2520and%2520modern%2520look%252C%2520single%2520object%2520focus.&width=80&height=80&seq=13&orientation=squarish",
    },
    {
      name: "Desserts",
      icon: "https://readdy.ai/api/search-image?query=icon%252C%25203D%2520cartoon%252C%2520Sweet%2520dessert%2520with%2520fruit%2520topping%252C%2520subject%2520fills%252080%2520percent%2520of%2520frame%252C%2520vibrant%2520colors%2520with%2520soft%2520gradients%252C%2520minimalist%2520design%252C%2520smooth%2520rounded%2520shapes%252C%2520subtle%2520shading%252C%2520no%2520outlines%252C%2520centered%2520composition%252C%2520isolated%2520on%2520white%2520background%252C%2520playful%2520and%2520friendly%2520aesthetic%252C%2520high%2520detail%2520quality%252C%2520clean%2520and%2520modern%2520look%252C%2520single%2520object%2520focus.&width=80&height=80&seq=6&orientation=squarish",
    },
  ];

  const recentOrders = [
    {
      id: 1,
      name: "Vegetable Stir Fry",
      restaurant: "Green Garden",
      date: "April 18, 2025",
      image:
        "https://readdy.ai/api/search-image?query=Colorful%20vegetable%20stir%20fry%20with%20tofu%20in%20a%20black%20bowl%2C%20vibrant%20fresh%20vegetables%20with%20glossy%20sauce%2C%20professional%20food%20photography%20with%20natural%20lighting%2C%20high-resolution%20detail%2C%20on%20a%20wooden%20surface%20with%20minimal%20styling%2C%20appetizing%20presentation&width=120&height=120&seq=104&orientation=squarish",
    },
    {
      id: 2,
      name: "Chicken Caesar Salad",
      restaurant: "Fresh & Tasty",
      date: "April 15, 2025",
      image:
        "https://readdy.ai/api/search-image?query=Classic%20chicken%20caesar%20salad%20with%20grilled%20chicken%20strips%2C%20crisp%20romaine%20lettuce%2C%20parmesan%20shavings%20and%20croutons%2C%20professional%20food%20photography%20with%20natural%20lighting%2C%20high-resolution%20detail%2C%20on%20a%20white%20plate%20with%20minimal%20styling%2C%20appetizing%20presentation&width=120&height=120&seq=105&orientation=squarish",
    },
    {
      id: 3,
      name: "Margherita Pizza",
      restaurant: "Bella Italia",
      date: "April 10, 2025",
      image:
        "https://readdy.ai/api/search-image?query=Authentic%20margherita%20pizza%20with%20fresh%20mozzarella%2C%20basil%20leaves%2C%20and%20tomato%20sauce%20on%20thin%20crust%2C%20professional%20food%20photography%20with%20natural%20lighting%2C%20high-resolution%20detail%2C%20wood-fired%20with%20charred%20edges%2C%20appetizing%20presentation&width=120&height=120&seq=106&orientation=squarish",
    },
  ];

  const dailySpecials = [
    {
      id: 1,
      title: "Lunch Special",
      description: "Any main dish + drink",
      discount: "25% OFF",
      validUntil: "2:00 PM",
      image:
        "https://readdy.ai/api/search-image?query=Elegant%20lunch%20special%20promotion%20with%20a%20beautifully%20plated%20main%20dish%20and%20refreshing%20drink%2C%20professional%20food%20photography%20with%20soft%20natural%20lighting%2C%20high-resolution%20detail%2C%20on%20a%20modern%20restaurant%20table%20setting%2C%20appetizing%20presentation%20with%20promotional%20styling&width=300&height=150&seq=107&orientation=landscape",
    },
    {
      id: 2,
      title: "Happy Hour",
      description: "All appetizers",
      discount: "30% OFF",
      validUntil: "6:00 PM",
      image:
        "https://readdy.ai/api/search-image?query=Attractive%20happy%20hour%20promotion%20with%20assorted%20appetizers%20and%20cocktails%2C%20professional%20food%20photography%20with%20ambient%20lighting%2C%20high-resolution%20detail%2C%20on%20a%20stylish%20bar%20setting%2C%20appetizing%20presentation%20with%20promotional%20styling&width=300&height=150&seq=108&orientation=landscape",
    },
  ];

  const quickCategories = [
    "Breakfast",
    "Lunch",
    "Dinner",
    "Healthy",
    "Fast Food",
    "Vegetarian",
  ];

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
          <h1 className="text-lg font-semibold text-gray-800">FoodDelight</h1>
        </div>
        <div>
         <Link to="/cart"> <i className="fas fa-shopping-cart text-gray-800 cursor-pointer"></i></Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-24 pb-24">
        {/* Welcome Banner */}
        <div className="relative mx-4 mb-6 rounded-xl overflow-hidden shadow-md">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/80 to-green-700/80 z-10"></div>
          <img
            src="https://readdy.ai/api/search-image?query=Beautiful%20food%20background%20with%20fresh%20vegetables%2C%20fruits%2C%20and%20herbs%20arranged%20artistically%2C%20soft%20focus%20with%20natural%20lighting%2C%20vibrant%20colors%2C%20top-down%20perspective%2C%20perfect%20for%20a%20food%20app%20banner%2C%20professional%20food%20photography&width=375&height=150&seq=100&orientation=landscape"
            alt="Food Banner"
            className="w-full h-32 object-cover"
          />
          <div className="absolute inset-0 z-20 p-4 flex flex-col justify-center">
            <div className="text-white">
              <p className="text-sm font-medium">{getCurrentGreeting()}</p>
              <h2 className="text-xl font-bold mb-2">Hi, Emma</h2>
              <div className="flex space-x-2 mt-2">
                <button className="bg-white text-green-600 text-xs py-1 px-3 rounded-full font-medium !rounded-button">
                  Delivery
                </button>
                <button className="bg-white/30 text-white text-xs py-1 px-3 rounded-full font-medium !rounded-button">
                  Pickup
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Categories */}
        <div className="px-4 mb-6">
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search for food..."
              className="w-full py-3 pl-10 pr-4 bg-white rounded-xl text-sm border-none shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>

          <div className="flex overflow-x-auto pb-2 -mx-1 scrollbar-hide">
            {quickCategories.map((category, index) => (
              <div key={index} className="px-1 flex-shrink-0">
                <button className="bg-white text-gray-700 text-xs py-2 px-4 rounded-full shadow-sm font-medium whitespace-nowrap !rounded-button">
                  {category}
                </button>
              </div>
            ))}
            <div className="px-1 flex-shrink-0">
              <a
                href="https://readdy.ai/home/9c93990c-9578-465a-823a-b16f698483a3/2c584fd4-4f9e-4971-88ef-ce1166089951"
                data-readdy="true"
                className="bg-green-50 text-green-600 text-xs py-2 px-4 rounded-full shadow-sm font-medium whitespace-nowrap flex items-center cursor-pointer !rounded-button"
              >
                View All <i className="fas fa-chevron-right ml-1 text-xs"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Featured Items */}
        <div className="mb-6">
          <div className="px-4 mb-3 flex justify-between items-center">
            <h2 className="text-lg font-bold text-gray-800">Featured Today</h2>
            <button className="text-green-600 text-sm font-medium cursor-pointer">
              See All
            </button>
          </div>

          <div className="flex overflow-x-auto pb-2 pl-4 scrollbar-hide">
            {featuredItems.map((item) => (
              <div key={item.id} className="mr-4 w-64 flex-shrink-0">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-36 object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs py-1 px-2 rounded-lg font-medium">
                      {item.discount}
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium text-gray-800 mb-1 truncate">
                      {item.name}
                    </h3>
                    <p className="text-gray-500 text-xs mb-2">
                      {item.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="text-yellow-500 mr-1">
                          <i className="fas fa-star text-xs"></i>
                        </span>
                        <span className="text-xs font-medium">
                          {item.rating}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-green-600 font-bold">
                          ${item.price}
                        </span>
                        <button className="ml-2 bg-green-500 text-white p-1.5 rounded-full cursor-pointer !rounded-button">
                          <i className="fas fa-plus text-xs"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Categories */}
        <div className="px-4 mb-6">
          <div className="mb-3 flex justify-between items-center">
            <h2 className="text-lg font-bold text-gray-800">
              Popular Categories
            </h2>
            <Link
              to="/saladCategory"
              data-readdy="true"
              className="text-green-600 text-sm font-medium cursor-pointer"
            >
              See All
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {popularCategories.map((category, index) => (
              <Link
                key={index}
                to="/category"
                data-readdy="true"
                className="cursor-pointer"
              >
                <div className="bg-white rounded-xl p-3 flex items-center shadow-sm">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-green-50 flex items-center justify-center mr-3">
                    <img
                      src={category.icon}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-800">
                    {category.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Orders */}
        <div className="mb-6">
          <div className="px-4 mb-3 flex justify-between items-center">
            <h2 className="text-lg font-bold text-gray-800">Recent Orders</h2>
            <button className="text-green-600 text-sm font-medium cursor-pointer">
              View All
            </button>
          </div>

          <div className="flex overflow-x-auto pb-2 pl-4 scrollbar-hide">
            {recentOrders.map((order) => (
              <div key={order.id} className="mr-4 w-56 flex-shrink-0">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm p-3 flex">
                  <img
                    src={order.image}
                    alt={order.name}
                    className="w-16 h-16 rounded-lg object-cover mr-3"
                  />
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="font-medium text-gray-800 text-sm truncate">
                        {order.name}
                      </h3>
                      <p className="text-gray-500 text-xs">
                        {order.restaurant}
                      </p>
                      <p className="text-gray-400 text-xs">{order.date}</p>
                    </div>
                    <button className="bg-green-500 text-white text-xs py-1 px-2 rounded-lg mt-1 cursor-pointer !rounded-button">
                      Reorder
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Specials */}
        <div className="px-4 mb-6">
          <div className="mb-3 flex justify-between items-center">
            <h2 className="text-lg font-bold text-gray-800">Daily Specials</h2>
            <button className="text-green-600 text-sm font-medium cursor-pointer">
              View All
            </button>
          </div>

          {dailySpecials.map((special) => (
            <div
              key={special.id}
              className="mb-3 relative rounded-xl overflow-hidden shadow-sm"
            >
              <img
                src={special.image}
                alt={special.title}
                className="w-full h-32 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center p-4">
                <div className="text-white">
                  <h3 className="font-bold text-lg">{special.title}</h3>
                  <p className="text-sm opacity-90 mb-1">
                    {special.description}
                  </p>
                  <div className="flex items-center">
                    <span className="bg-red-500 text-white text-xs py-0.5 px-2 rounded-lg font-bold mr-2">
                      {special.discount}
                    </span>
                    <span className="text-xs opacity-80">
                      Valid until {special.validUntil}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tab Bar */}
      <AppNavigation/>
    </div>
  );
};

export default HomePage;
