import React, { useState } from "react";
import AppNavigation from "../components/AppNavigation";
import BakcButtob from "../components/BakcButtob";
import { Link } from "react-router-dom";
const AllFoodCategories: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const categories = [
    {
      name: "Salads",
      icon: "https://readdy.ai/api/search-image?query=icon%252C%25203D%2520cartoon%252C%2520Fresh%2520green%2520salad%2520in%2520a%2520bowl%252C%2520subject%2520fills%252080%2520percent%2520of%2520frame%252C%2520vibrant%2520colors%2520with%2520soft%2520gradients%252C%2520minimalist%2520design%252C%2520smooth%2520rounded%2520shapes%252C%2520subtle%2520shading%252C%2520no%2520outlines%252C%2520centered%2520composition%252C%2520isolated%2520on%2520white%2520background%252C%2520playful%2520and%2520friendly%2520aesthetic%252C%2520high%2520detail%2520quality%252C%2520clean%2520and%2520modern%2520look%252C%2520single%2520object%2520focus.&width=80&height=80&seq=3&orientation=squarish",
    },
    {
      name: "Bowls",
      icon: "https://readdy.ai/api/search-image?query=icon%252C%25203D%2520cartoon%252C%2520Healthy%2520food%2520bowl%2520with%2520grains%2520and%2520vegetables%252C%2520subject%2520fills%252080%2520percent%2520of%2520frame%252C%2520vibrant%2520colors%2520with%2520soft%2520gradients%252C%2520minimalist%2520design%252C%2520smooth%2520rounded%2520shapes%252C%2520subtle%2520shading%252C%2520no%2520outlines%252C%2520centered%2520composition%252C%2520isolated%2520on%2520white%2520background%252C%2520playful%2520and%2520friendly%2520aesthetic%252C%2520high%2520detail%2520quality%252C%2520clean%2520and%2520modern%2520look%252C%2520single%2520object%2520focus.&width=80&height=80&seq=4&orientation=squarish",
    },
    {
      name: "Drinks",
      icon: "https://readdy.ai/api/search-image?query=icon%252C%25203D%2520cartoon%252C%2520Colorful%2520smoothie%2520or%2520juice%2520in%2520a%2520glass%252C%2520subject%2520fills%252080%2520percent%2520of%2520frame%252C%2520vibrant%2520colors%2520with%2520soft%2520gradients%252C%2520minimalist%2520design%252C%2520smooth%2520rounded%2520shapes%252C%2520subtle%2520shading%252C%2520no%2520outlines%252C%2520centered%2520composition%252C%2520isolated%2520on%2520white%2520background%252C%2520playful%2520and%2520friendly%2520aesthetic%252C%2520high%2520detail%2520quality%252C%2520clean%2520and%2520modern%2520look%252C%2520single%2520object%2520focus.&width=80&height=80&seq=5&orientation=squarish",
    },
    {
      name: "Desserts",
      icon: "https://readdy.ai/api/search-image?query=icon%252C%25203D%2520cartoon%252C%2520Sweet%2520dessert%2520with%2520fruit%2520topping%252C%2520subject%2520fills%252080%2520percent%2520of%2520frame%252C%2520vibrant%2520colors%2520with%2520soft%2520gradients%252C%2520minimalist%2520design%252C%2520smooth%2520rounded%2520shapes%252C%2520subtle%2520shading%252C%2520no%2520outlines%252C%2520centered%2520composition%252C%2520isolated%2520on%2520white%2520background%252C%2520playful%2520and%2520friendly%2520aesthetic%252C%2520high%2520detail%2520quality%252C%2520clean%2520and%2520modern%2520look%252C%2520single%2520object%2520focus.&width=80&height=80&seq=6&orientation=squarish",
    },
    {
      name: "Main Dishes",
      icon: "https://readdy.ai/api/search-image?query=icon%252C%25203D%2520cartoon%252C%2520Gourmet%2520main%2520dish%2520with%2520steak%2520and%2520vegetables%252C%2520subject%2520fills%252080%2520percent%2520of%2520frame%252C%2520vibrant%2520colors%2520with%2520soft%2520gradients%252C%2520minimalist%2520design%252C%2520smooth%2520rounded%2520shapes%252C%2520subtle%2520shading%252C%2520no%2520outlines%252C%2520centered%2520composition%252C%2520isolated%2520on%2520white%2520background%252C%2520playful%2520and%2520friendly%2520aesthetic%252C%2520high%2520detail%2520quality%252C%2520clean%2520and%2520modern%2520look%252C%2520single%2520object%2520focus.&width=80&height=80&seq=13&orientation=squarish",
    },
    {
      name: "Appetizers",
      icon: "https://readdy.ai/api/search-image?query=icon%252C%25203D%2520cartoon%252C%2520Small%2520appetizer%2520plate%2520with%2520finger%2520foods%252C%2520subject%2520fills%252080%2520percent%2520of%2520frame%252C%2520vibrant%2520colors%2520with%2520soft%2520gradients%252C%2520minimalist%2520design%252C%2520smooth%2520rounded%2520shapes%252C%2520subtle%2520shading%252C%2520no%2520outlines%252C%2520centered%2520composition%252C%2520isolated%2520on%2520white%2520background%252C%2520playful%2520and%2520friendly%2520aesthetic%252C%2520high%2520detail%2520quality%252C%2520clean%2520and%2520modern%2520look%252C%2520single%2520object%2520focus.&width=80&height=80&seq=14&orientation=squarish",
    },
    {
      name: "Soups",
      icon: "https://readdy.ai/api/search-image?query=icon%252C%25203D%2520cartoon%252C%2520Steaming%2520bowl%2520of%2520soup%2520with%2520vegetables%252C%2520subject%2520fills%252080%2520percent%2520of%2520frame%252C%2520vibrant%2520colors%2520with%2520soft%2520gradients%252C%2520minimalist%2520design%252C%2520smooth%2520rounded%2520shapes%252C%2520subtle%2520shading%252C%2520no%2520outlines%252C%2520centered%2520composition%252C%2520isolated%2520on%2520white%2520background%252C%2520playful%2520and%2520friendly%2520aesthetic%252C%2520high%2520detail%2520quality%252C%2520clean%2520and%2520modern%2520look%252C%2520single%2520object%2520focus.&width=80&height=80&seq=15&orientation=squarish",
    },
    {
      name: "Sandwiches",
      icon: "https://readdy.ai/api/search-image?query=icon%252C%25203D%2520cartoon%252C%2520Fresh%2520sandwich%2520with%2520layers%2520of%2520ingredients%252C%2520subject%2520fills%252080%2520percent%2520of%2520frame%252C%2520vibrant%2520colors%2520with%2520soft%2520gradients%252C%2520minimalist%2520design%252C%2520smooth%2520rounded%2520shapes%252C%2520subtle%2520shading%252C%2520no%2520outlines%252C%2520centered%2520composition%252C%2520isolated%2520on%2520white%2520background%252C%2520playful%2520and%2520friendly%2520aesthetic%252C%2520high%2520detail%2520quality%252C%2520clean%2520and%2520modern%2520look%252C%2520single%2520object%2520focus.&width=80&height=80&seq=16&orientation=squarish",
    },
    {
      name: "Asian Cuisine",
      icon: "https://readdy.ai/api/search-image?query=icon%252C%25203D%2520cartoon%252C%2520Asian%2520noodle%2520bowl%2520with%2520chopsticks%252C%2520subject%2520fills%252080%2520percent%2520of%2520frame%252C%2520vibrant%2520colors%2520with%2520soft%2520gradients%252C%2520minimalist%2520design%252C%2520smooth%2520rounded%2520shapes%252C%2520subtle%2520shading%252C%2520no%2520outlines%252C%2520centered%2520composition%252C%2520isolated%2520on%2520white%2520background%252C%2520playful%2520and%2520friendly%2520aesthetic%252C%2520high%2520detail%2520quality%252C%2520clean%2520and%2520modern%2520look%252C%2520single%2520object%2520focus.&width=80&height=80&seq=17&orientation=squarish",
    },
    {
      name: "Italian Food",
      icon: "https://readdy.ai/api/search-image?query=icon%252C%25203D%2520cartoon%252C%2520Italian%2520pasta%2520dish%2520with%2520tomato%2520sauce%252C%2520subject%2520fills%252080%2520percent%2520of%2520frame%252C%2520vibrant%2520colors%2520with%2520soft%2520gradients%252C%2520minimalist%2520design%252C%2520smooth%2520rounded%2520shapes%252C%2520subtle%2520shading%252C%2520no%2520outlines%252C%2520centered%2520composition%252C%2520isolated%2520on%2520white%2520background%252C%2520playful%2520and%2520friendly%2520aesthetic%252C%2520high%2520detail%2520quality%252C%2520clean%2520and%2520modern%2520look%252C%2520single%2520object%2520focus.&width=80&height=80&seq=18&orientation=squarish",
    },
    {
      name: "Breakfast",
      icon: "https://readdy.ai/api/search-image?query=icon%252C%25203D%2520cartoon%252C%2520Breakfast%2520plate%2520with%2520eggs%2520and%2520toast%252C%2520subject%2520fills%252080%2520percent%2520of%2520frame%252C%2520vibrant%2520colors%2520with%2520soft%2520gradients%252C%2520minimalist%2520design%252C%2520smooth%2520rounded%2520shapes%252C%2520subtle%2520shading%252C%2520no%2520outlines%252C%2520centered%2520composition%252C%2520isolated%2520on%2520white%2520background%252C%2520playful%2520and%2520friendly%2520aesthetic%252C%2520high%2520detail%2520quality%252C%2520clean%2520and%2520modern%2520look%252C%2520single%2520object%2520focus.&width=80&height=80&seq=19&orientation=squarish",
    },
    {
      name: "Snacks",
      icon: "https://readdy.ai/api/search-image?query=icon%252C%25203D%2520cartoon%252C%2520Assorted%2520healthy%2520snacks%2520in%2520a%2520bowl%252C%2520subject%2520fills%252080%2520percent%2520of%2520frame%252C%2520vibrant%2520colors%2520with%2520soft%2520gradients%252C%2520minimalist%2520design%252C%2520smooth%2520rounded%2520shapes%252C%2520subtle%2520shading%252C%2520no%2520outlines%252C%2520centered%2520composition%252C%2520isolated%2520on%2520white%2520background%252C%2520playful%2520and%2520friendly%2520aesthetic%252C%2520high%2520detail%2520quality%252C%2520clean%2520and%2520modern%2520look%252C%2520single%2520object%2520focus.&width=80&height=80&seq=20&orientation=squarish",
    },
    {
      name: "Vegan",
      icon: "https://readdy.ai/api/search-image?query=icon%252C%25203D%2520cartoon%252C%2520Colorful%2520vegan%2520plate%2520with%2520vegetables%2520and%2520legumes%252C%2520subject%2520fills%252080%2520percent%2520of%2520frame%252C%2520vibrant%2520colors%2520with%2520soft%2520gradients%252C%2520minimalist%2520design%252C%2520smooth%2520rounded%2520shapes%252C%2520subtle%2520shading%252C%2520no%2520outlines%252C%2520centered%2520composition%252C%2520isolated%2520on%2520white%2520background%252C%2520playful%2520and%2520friendly%2520aesthetic%252C%2520high%2520detail%2520quality%252C%2520clean%2520and%2520modern%2520look%252C%2520single%2520object%2520focus.&width=80&height=80&seq=21&orientation=squarish",
    },
    {
      name: "Seafood",
      icon: "https://readdy.ai/api/search-image?query=icon%252C%25203D%2520cartoon%252C%2520Fresh%2520seafood%2520dish%2520with%2520fish%2520and%2520garnish%252C%2520subject%2520fills%252080%2520percent%2520of%2520frame%252C%2520vibrant%2520colors%2520with%2520soft%2520gradients%252C%2520minimalist%2520design%252C%2520smooth%2520rounded%2520shapes%252C%2520subtle%2520shading%252C%2520no%2520outlines%252C%2520centered%2520composition%252C%2520isolated%2520on%2520white%2520background%252C%2520playful%2520and%2520friendly%2520aesthetic%252C%2520high%2520detail%2520quality%252C%2520clean%2520and%2520modern%2520look%252C%2520single%2520object%2520focus.&width=80&height=80&seq=22&orientation=squarish",
    },
    {
      name: "Mexican",
      icon: "https://readdy.ai/api/search-image?query=icon%252C%25203D%2520cartoon%252C%2520Colorful%2520Mexican%2520taco%2520with%2520fillings%252C%2520subject%2520fills%252080%2520percent%2520of%2520frame%252C%2520vibrant%2520colors%2520with%2520soft%2520gradients%252C%2520minimalist%2520design%252C%2520smooth%2520rounded%2520shapes%252C%2520subtle%2520shading%252C%2520no%2520outlines%252C%2520centered%2520composition%252C%2520isolated%2520on%2520white%2520background%252C%2520playful%2520and%2520friendly%2520aesthetic%252C%2520high%2520detail%2520quality%252C%2520clean%2520and%2520modern%2520look%252C%2520single%2520object%2520focus.&width=80&height=80&seq=23&orientation=squarish",
    },
  ];
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  const clearSearch = () => {
    setSearchQuery("");
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
          <h1 className="text-lg font-semibold text-gray-800">
            All Categories
          </h1>
        </div>
        <div>
          <Link to="/cart">
            <i className="fas fa-shopping-cart text-gray-800"></i>
          </Link>
        </div>
      </div>
      {/* Main Content */}
      <div className="pt-24 px-4 pb-24">
        {/* Search Bar */}
        <div className="relative mb-6">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search categories..."
            className="w-full py-3 pl-10 pr-10 bg-gray-100 rounded-3xl text-sm border-none focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
            >
              <i className="fas fa-times-circle"></i>
            </button>
          )}
        </div>
        {/* Categories Grid */}
        <div className="grid grid-cols-3 gap-5">
          {filteredCategories.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <Link
                to="/details"
                data-readdy="true"
                className="cursor-pointer"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden bg-white shadow-sm mb-2 flex items-center justify-center">
                  <img
                    src={category.icon}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs text-gray-800 font-medium text-center whitespace-nowrap overflow-hidden text-overflow-ellipsis w-full">
                  {category.name}
                </span>
              </Link>
            </div>
          ))}
        </div>
        {filteredCategories.length === 0 && (
          <div className="flex flex-col items-center justify-center mt-10">
            <i className="fas fa-search text-gray-300 text-5xl mb-4"></i>
            <p className="text-gray-500 text-center">
              No categories found matching "{searchQuery}"
            </p>
            <button
              onClick={clearSearch}
              className="mt-4 text-green-500 font-medium cursor-pointer"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
      {/* Tab Bar */}
     <AppNavigation />
    </div>
  );
};
export default AllFoodCategories;
