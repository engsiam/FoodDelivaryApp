

import React, { useState, useEffect, useRef } from 'react';
import AppNavigation from '../components/AppNavigation';

const FoodSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50]);
  const [dietaryPreferences, setDietaryPreferences] = useState({
    vegetarian: false,
    vegan: false,
    spicy: false
  });
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([
    'Pizza', 'Burger', 'Sushi', 'Salad'
  ]);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const categories = [
    { id: 'all', name: 'All', icon: 'fa-utensils' },
    { id: 'breakfast', name: 'Breakfast', icon: 'fa-coffee' },
    { id: 'lunch', name: 'Lunch', icon: 'fa-hamburger' },
    { id: 'dinner', name: 'Dinner', icon: 'fa-drumstick-bite' },
    { id: 'snacks', name: 'Snacks', icon: 'fa-cookie' },
    { id: 'drinks', name: 'Drinks', icon: 'fa-glass-martini-alt' },
    { id: 'desserts', name: 'Desserts', icon: 'fa-ice-cream' }
  ];

  const foodItems = [
    {
      id: 1,
      name: "Avocado Toast",
      price: 8.99,
      image: "https://readdy.ai/api/search-image?query=Gourmet%20avocado%20toast%20on%20artisanal%20sourdough%20bread%20with%20perfectly%20smashed%20avocado%2C%20cherry%20tomatoes%2C%20microgreens%2C%20and%20a%20drizzle%20of%20olive%20oil.%20Professional%20food%20photography%20with%20natural%20lighting%20on%20a%20minimalist%20white%20plate.&width=150&height=150&seq=101&orientation=squarish",
      isVegetarian: true,
      category: "breakfast"
    },
    {
      id: 2,
      name: "Buddha Bowl",
      price: 14.99,
      image: "https://readdy.ai/api/search-image?query=Vibrant%20Buddha%20bowl%20with%20brown%20rice%2C%20perfectly%20roasted%20vegetables%2C%20sliced%20avocado%2C%20and%20drizzled%20with%20creamy%20tahini%20dressing.%20Professional%20food%20photography%20with%20natural%20lighting%20on%20a%20minimalist%20white%20plate.&width=150&height=150&seq=102&orientation=squarish",
      isVegetarian: true,
      category: "lunch"
    },
    {
      id: 3,
      name: "Sweet Potato Fries",
      price: 5.99,
      image: "https://readdy.ai/api/search-image?query=Crispy%20sweet%20potato%20fries%20with%20a%20side%20of%20creamy%20chipotle%20aioli%20dipping%20sauce.%20Professional%20food%20photography%20with%20natural%20lighting%20on%20a%20minimalist%20white%20plate.%20Clean%20styling%20with%20no%20text%20or%20watermarks.&width=150&height=150&seq=103&orientation=squarish",
      isVegetarian: true,
      category: "snacks"
    },
    {
      id: 4,
      name: "Chicken Tikka Masala",
      price: 16.99,
      image: "https://readdy.ai/api/search-image?query=Authentic%20chicken%20tikka%20masala%20with%20tender%20chicken%20pieces%20in%20a%20rich%2C%20creamy%20tomato%20sauce%2C%20garnished%20with%20fresh%20cilantro.%20Professional%20food%20photography%20with%20natural%20lighting%20on%20a%20minimalist%20white%20plate.&width=150&height=150&seq=104&orientation=squarish",
      isSpicy: true,
      category: "dinner"
    },
    {
      id: 5,
      name: "Matcha Latte",
      price: 4.99,
      image: "https://readdy.ai/api/search-image?query=Creamy%20matcha%20latte%20with%20beautiful%20latte%20art%20in%20a%20white%20ceramic%20cup%20on%20a%20wooden%20table.%20Professional%20beverage%20photography%20with%20soft%20natural%20lighting%20and%20shallow%20depth%20of%20field.&width=150&height=150&seq=105&orientation=squarish",
      isVegetarian: true,
      category: "drinks"
    },
    {
      id: 6,
      name: "Chocolate Lava Cake",
      price: 7.99,
      image: "https://readdy.ai/api/search-image?query=Decadent%20chocolate%20lava%20cake%20with%20molten%20center%2C%20dusted%20with%20powdered%20sugar%20and%20served%20with%20a%20scoop%20of%20vanilla%20ice%20cream.%20Professional%20dessert%20photography%20with%20dramatic%20lighting%20on%20a%20dark%20plate.&width=150&height=150&seq=106&orientation=squarish",
      isVegetarian: true,
      category: "desserts"
    },
    {
      id: 7,
      name: "Quinoa Salad",
      price: 12.99,
      image: "https://readdy.ai/api/search-image?query=Fresh%20quinoa%20salad%20with%20colorful%20vegetables%2C%20feta%20cheese%2C%20and%20lemon%20vinaigrette.%20Professional%20food%20photography%20with%20bright%20natural%20lighting%20on%20a%20minimalist%20white%20plate.&width=150&height=150&seq=107&orientation=squarish",
      isVegetarian: true,
      category: "lunch"
    },
    {
      id: 8,
      name: "Spicy Ramen",
      price: 13.99,
      image: "https://readdy.ai/api/search-image?query=Steaming%20bowl%20of%20spicy%20ramen%20with%20sliced%20pork%2C%20soft-boiled%20egg%2C%20green%20onions%2C%20and%20nori%20in%20a%20rich%20broth.%20Professional%20food%20photography%20with%20moody%20lighting%20in%20a%20traditional%20ceramic%20bowl.&width=150&height=150&seq=108&orientation=squarish",
      isSpicy: true,
      category: "dinner"
    }
  ];

  const [filteredItems, setFilteredItems] = useState(foodItems);

  useEffect(() => {
    filterItems();
  }, [searchQuery, priceRange, dietaryPreferences, activeCategory]);

  const filterItems = () => {
    let filtered = foodItems;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by price range
    filtered = filtered.filter(
      item => item.price >= priceRange[0] && item.price <= priceRange[1]
    );

    // Filter by dietary preferences
    if (dietaryPreferences.vegetarian) {
      filtered = filtered.filter(item => item.isVegetarian);
    }
    if (dietaryPreferences.vegan) {
      filtered = filtered.filter(item => item.isVegetarian); // Simplified for demo
    }
    if (dietaryPreferences.spicy) {
      filtered = filtered.filter(item => item.isSpicy);
    }

    // Filter by category
    if (activeCategory !== 'All') {
      filtered = filtered.filter(
        item => item.category.toLowerCase() === activeCategory.toLowerCase()
      );
    }

    setFilteredItems(filtered);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery('');
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (e.target.name === 'min') {
      setPriceRange([value, priceRange[1]]);
    } else {
      setPriceRange([priceRange[0], value]);
    }
  };

  const toggleDietaryPreference = (preference: keyof typeof dietaryPreferences) => {
    setDietaryPreferences({
      ...dietaryPreferences,
      [preference]: !dietaryPreferences[preference]
    });
  };

  const resetFilters = () => {
    setPriceRange([0, 50]);
    setDietaryPreferences({
      vegetarian: false,
      vegan: false,
      spicy: false
    });
  };

  const handleHistoryItemClick = (query: string) => {
    setSearchQuery(query);
    setIsSearchFocused(false);
  };

  const addToSearchHistory = (query: string) => {
    if (query.trim() && !searchHistory.includes(query)) {
      setSearchHistory([query, ...searchHistory.slice(0, 4)]);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      addToSearchHistory(searchQuery);
      setIsSearchFocused(false);
    }
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

      {/* Search Header */}
      <div className="fixed top-8 left-0 right-0 z-40 bg-white py-3 px-4 flex flex-col max-w-[375px] mx-auto shadow-sm">
        <form onSubmit={handleSearchSubmit} className="flex items-center">
          <div className="relative flex-1">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search for food..."
              className="w-full py-2.5 pl-10 pr-10 bg-gray-100 rounded-full text-sm border-none focus:ring-2 focus:ring-green-500 focus:outline-none"
              value={searchQuery}
              onChange={handleSearch}
              onFocus={() => setIsSearchFocused(true)}
            />
            <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            {searchQuery && (
              <button
                type="button"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                onClick={clearSearch}
              >
                <i className="fas fa-times"></i>
              </button>
            )}
          </div>
          <button
            type="button"
            className={`ml-3 px-3 py-2.5 rounded-full flex items-center justify-center cursor-pointer !rounded-button ${
              Object.values(dietaryPreferences).some(Boolean) || priceRange[0] > 0 || priceRange[1] < 50
                ? 'bg-green-500 text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
            onClick={toggleFilters}
          >
            <i className="fas fa-sliders-h"></i>
          </button>
        </form>
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleFilters}
          ></div>
          <div className="fixed top-[100px] left-0 right-0 z-50 bg-white rounded-t-2xl p-4 max-w-[375px] mx-auto shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Filters</h3>
              <button
                className="text-gray-500 cursor-pointer"
                onClick={toggleFilters}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-medium mb-3">Price Range</h4>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">${priceRange[0]}</span>
                <span className="text-sm text-gray-600">${priceRange[1]}</span>
              </div>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <input
                    type="range"
                    name="min"
                    min="0"
                    max="50"
                    value={priceRange[0]}
                    onChange={handlePriceChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="range"
                    name="max"
                    min="0"
                    max="50"
                    value={priceRange[1]}
                    onChange={handlePriceChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
                  />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-medium mb-3">Dietary Preferences</h4>
              <div className="flex flex-wrap gap-2">
                {Object.entries({
                  vegetarian: 'Vegetarian',
                  vegan: 'Vegan',
                  spicy: 'Spicy'
                }).map(([key, label]) => (
                  <button
                    key={key}
                    className={`px-4 py-2 rounded-full text-sm !rounded-button ${
                      dietaryPreferences[key as keyof typeof dietaryPreferences]
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                    onClick={() => toggleDietaryPreference(key as keyof typeof dietaryPreferences)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-full font-medium !rounded-button"
                onClick={resetFilters}
              >
                Reset
              </button>
              <button
                className="flex-1 py-3 bg-green-500 text-white rounded-full font-medium !rounded-button"
                onClick={toggleFilters}
              >
                Apply Filters
              </button>
            </div>
          </div>
        </>
      )}

      {/* Search History */}
      {isSearchFocused && searchQuery === '' && (
        <div className="fixed top-[100px] left-0 right-0 z-30 bg-white shadow-md max-w-[375px] mx-auto">
          <div className="p-4">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Recent Searches</h3>
            <ul>
              {searchHistory.map((item, index) => (
                <li
                  key={index}
                  className="py-2 flex items-center cursor-pointer hover:bg-gray-50"
                  onClick={() => handleHistoryItemClick(item)}
                >
                  <i className="fas fa-history text-gray-400 mr-3"></i>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="pt-28 pb-20">
        {/* Categories */}
        <div className="mb-6">
          <h3 className="text-base font-semibold text-gray-800 px-4 mb-3">Popular Categories</h3>
          <div className="flex overflow-x-auto hide-scrollbar px-4">
            <div className="flex space-x-3 pb-2">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className={`flex flex-col items-center justify-center p-2 min-w-[70px] cursor-pointer ${
                    activeCategory === category.name ? 'text-green-500' : 'text-gray-600'
                  }`}
                  onClick={() => setActiveCategory(category.name)}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-1 ${
                      activeCategory === category.name
                        ? 'bg-green-100'
                        : 'bg-gray-100'
                    }`}
                  >
                    <i className={`fas ${category.icon} ${
                      activeCategory === category.name ? 'text-green-500' : 'text-gray-600'
                    }`}></i>
                  </div>
                  <span className="text-xs font-medium whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                    {category.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Food Items Grid */}
        <div className="px-4">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-2 gap-4">
              {filteredItems.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute top-2 right-2 flex space-x-1">
                      {item.isVegetarian && (
                        <span className="bg-green-500 text-white text-xs p-1 rounded-full">
                          <i className="fas fa-leaf"></i>
                        </span>
                      )}
                      {item.isSpicy && (
                        <span className="bg-red-500 text-white text-xs p-1 rounded-full">
                          <i className="fas fa-pepper-hot"></i>
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium text-gray-800 mb-1">{item.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-green-600 font-semibold">${item.price.toFixed(2)}</span>
                      <button className="bg-green-500 text-white p-1.5 rounded-full !rounded-button">
                        <i className="fas fa-plus text-xs"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-10">
              <i className="fas fa-search text-4xl text-gray-300 mb-4"></i>
              <h3 className="text-lg font-medium text-gray-700 mb-2">No results found</h3>
              <p className="text-sm text-gray-500 text-center mb-4">
                Try adjusting your search or filters to find what you're looking for.
              </p>
              <button
                className="px-4 py-2 bg-green-500 text-white rounded-full !rounded-button"
                onClick={resetFilters}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Tab Bar */}
      <AppNavigation />

      {/* Custom Styles */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default FoodSearch;

