import React, { useState } from "react";
import BakcButtob from "../components/BakcButtob";
import { Link } from "react-router-dom";
const BowlDetails: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("regular");
  const [showNutrition, setShowNutrition] = useState(false);
  const [showIngredients, setShowIngredients] = useState(true);
  const [customizations, setCustomizations] = useState({
    avocado: true,
    quinoa: true,
    kale: true,
    cherry_tomatoes: true,
    cucumber: true,
    red_onion: true,
    feta: true,
    lemon_dressing: true,
  });
  const [extras, setExtras] = useState({
    extra_avocado: false,
    grilled_chicken: false,
    tofu: false,
    mixed_nuts: false,
  });
  const handleCustomizationChange = (item: string) => {
    setCustomizations({
      ...customizations,
      [item]: !customizations[item as keyof typeof customizations],
    });
  };
  const handleExtrasChange = (item: string) => {
    setExtras({
      ...extras,
      [item]: !extras[item as keyof typeof extras],
    });
  };
  const calculateTotalPrice = () => {
    let basePrice = 14.5;
    // Add price for size
    if (selectedSize === "large") {
      basePrice += 3.0;
    }
    // Add price for extras
    if (extras.extra_avocado) basePrice += 1.5;
    if (extras.grilled_chicken) basePrice += 2.5;
    if (extras.tofu) basePrice += 2.0;
    if (extras.mixed_nuts) basePrice += 1.0;
    return (basePrice * quantity).toFixed(2);
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
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
            Avocado Quinoa Bowl
          </h1>
        </div>
        <div>
         <Link to="/cart">
          <i className="fas fa-shopping-cart text-gray-800 text-lg"></i>
         </Link>
        </div>
      </div>
      {/* Main Content */}
      <div className="pt-20 pb-24">
        {/* Hero Image */}
        <div className="relative w-full h-64">
          <img
            src="https://readdy.ai/api/search-image?query=Overhead%2520view%2520of%2520a%2520beautiful%2520avocado%2520quinoa%2520bowl%2520with%2520fresh%2520ingredients.%2520A%2520wooden%2520bowl%2520filled%2520with%2520fluffy%2520quinoa%252C%2520sliced%2520avocado%252C%2520cherry%2520tomatoes%252C%2520cucumber%252C%2520red%2520onion%252C%2520and%2520feta%2520cheese.%2520Garnished%2520with%2520microgreens%2520and%2520lemon%2520wedge.%2520Professional%2520food%2520photography%2520with%2520natural%2520lighting%2520on%2520dark%2520background.&width=375&height=256&seq=10&orientation=landscape"
            alt="Avocado Quinoa Bowl"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10"></div>
          <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-3xl !rounded-button">
            <span className="text-sm font-semibold text-green-600">$14.50</span>
          </div>
          <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-3xl !rounded-button flex items-center">
            <i className="fas fa-star text-yellow-400 mr-1 text-sm"></i>
            <span className="text-sm font-medium">4.7</span>
          </div>
        </div>
        {/* Product Info */}
        <div className="px-4 py-5">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Avocado Quinoa Bowl
          </h1>
          <p className="text-gray-600 mb-3">
            A nutritious and delicious bowl packed with fresh ingredients. Our
            signature quinoa base topped with creamy avocado, crisp vegetables,
            and zesty lemon dressing.
          </p>
          <div className="flex items-center mb-4">
            <div className="flex items-center bg-gray-100 px-3 py-1 rounded-3xl !rounded-button mr-3">
              <i className="fas fa-clock text-gray-500 mr-1 text-xs"></i>
              <span className="text-xs text-gray-700">20-25 min</span>
            </div>
            <div className="flex items-center bg-gray-100 px-3 py-1 rounded-3xl !rounded-button mr-3">
              <i className="fas fa-leaf text-green-500 mr-1 text-xs"></i>
              <span className="text-xs text-gray-700">Vegetarian</span>
            </div>
            <div className="flex items-center bg-gray-100 px-3 py-1 rounded-3xl !rounded-button">
              <i className="fas fa-wheat-awn-circle-exclamation text-amber-600 mr-1 text-xs"></i>
              <span className="text-xs text-gray-700">Gluten-free</span>
            </div>
          </div>
          <div className="flex items-center mb-6">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <i
                  key={star}
                  className={`fas fa-star text-sm ${
                    star <= 4 ? "text-yellow-400" : "text-yellow-400 opacity-50"
                  }`}
                ></i>
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-2">
              4.7 (128 reviews)
            </span>
          </div>
          {/* Ingredients Section */}
          <div className="mb-6 bg-white rounded-xl p-4 shadow-sm">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setShowIngredients(!showIngredients)}
            >
              <h2 className="text-lg font-semibold text-gray-800">
                Ingredients
              </h2>
              <i
                className={`fas ${
                  showIngredients ? "fa-chevron-up" : "fa-chevron-down"
                } text-gray-500`}
              ></i>
            </div>
            {showIngredients && (
              <div className="mt-3 space-y-3">
                {[
                  {
                    name: "Organic Quinoa",
                    quantity: "1 cup",
                    img: "https://readdy.ai/api/search-image?query=icon%252C%2520Realistic%2520food%252C%2520photorealistic%2520quinoa%2520grains%252C%2520high-detail%25203D%2520rendering%252C%2520prominent%2520main%2520subjects%252C%2520clear%2520and%2520sharp%252C%2520subject%2520fills%252080%2520percent%2520of%2520frame%252C%2520isolated%2520on%2520white%2520background%252C%2520centered%2520composition%252C%2520soft%2520lighting%252C%2520subtle%2520shadows%252C%2520product%2520photography%2520style.&width=40&height=40&seq=11&orientation=squarish",
                  },
                  {
                    name: "Ripe Avocado",
                    quantity: "1/2",
                    img: "https://readdy.ai/api/search-image?query=icon%252C%2520Realistic%2520food%252C%2520photorealistic%2520avocado%2520half%252C%2520high-detail%25203D%2520rendering%252C%2520prominent%2520main%2520subjects%252C%2520clear%2520and%2520sharp%252C%2520subject%2520fills%252080%2520percent%2520of%2520frame%252C%2520isolated%2520on%2520white%2520background%252C%2520centered%2520composition%252C%2520soft%2520lighting%252C%2520subtle%2520shadows%252C%2520product%2520photography%2520style.&width=40&height=40&seq=12&orientation=squarish",
                  },
                  {
                    name: "Fresh Kale",
                    quantity: "1 cup",
                    img: "https://readdy.ai/api/search-image?query=icon%252C%2520Realistic%2520food%252C%2520photorealistic%2520kale%2520leaves%252C%2520high-detail%25203D%2520rendering%252C%2520prominent%2520main%2520subjects%252C%2520clear%2520and%2520sharp%252C%2520subject%2520fills%252080%2520percent%2520of%2520frame%252C%2520isolated%2520on%2520white%2520background%252C%2520centered%2520composition%252C%2520soft%2520lighting%252C%2520subtle%2520shadows%252C%2520product%2520photography%2520style.&width=40&height=40&seq=13&orientation=squarish",
                  },
                  {
                    name: "Cherry Tomatoes",
                    quantity: "1/2 cup",
                    img: "https://readdy.ai/api/search-image?query=icon%252C%2520Realistic%2520food%252C%2520photorealistic%2520cherry%2520tomatoes%252C%2520high-detail%25203D%2520rendering%252C%2520prominent%2520main%2520subjects%252C%2520clear%2520and%2520sharp%252C%2520subject%2520fills%252080%2520percent%2520of%2520frame%252C%2520isolated%2520on%2520white%2520background%252C%2520centered%2520composition%252C%2520soft%2520lighting%252C%2520subtle%2520shadows%252C%2520product%2520photography%2520style.&width=40&height=40&seq=14&orientation=squarish",
                  },
                  {
                    name: "Cucumber",
                    quantity: "1/4 cup",
                    img: "https://readdy.ai/api/search-image?query=icon%252C%2520Realistic%2520food%252C%2520photorealistic%2520cucumber%2520slices%252C%2520high-detail%25203D%2520rendering%252C%2520prominent%2520main%2520subjects%252C%2520clear%2520and%2520sharp%252C%2520subject%2520fills%252080%2520percent%2520of%2520frame%252C%2520isolated%2520on%2520white%2520background%252C%2520centered%2520composition%252C%2520soft%2520lighting%252C%2520subtle%2520shadows%252C%2520product%2520photography%2520style.&width=40&height=40&seq=15&orientation=squarish",
                  },
                  {
                    name: "Red Onion",
                    quantity: "2 tbsp",
                    img: "https://readdy.ai/api/search-image?query=icon%252C%2520Realistic%2520food%252C%2520photorealistic%2520red%2520onion%2520slices%252C%2520high-detail%25203D%2520rendering%252C%2520prominent%2520main%2520subjects%252C%2520clear%2520and%2520sharp%252C%2520subject%2520fills%252080%2520percent%2520of%2520frame%252C%2520isolated%2520on%2520white%2520background%252C%2520centered%2520composition%252C%2520soft%2520lighting%252C%2520subtle%2520shadows%252C%2520product%2520photography%2520style.&width=40&height=40&seq=16&orientation=squarish",
                  },
                  {
                    name: "Feta Cheese",
                    quantity: "2 tbsp",
                    img: "https://readdy.ai/api/search-image?query=icon%252C%2520Realistic%2520food%252C%2520photorealistic%2520feta%2520cheese%2520crumbles%252C%2520high-detail%25203D%2520rendering%252C%2520prominent%2520main%2520subjects%252C%2520clear%2520and%2520sharp%252C%2520subject%2520fills%252080%2520percent%2520of%2520frame%252C%2520isolated%2520on%2520white%2520background%252C%2520centered%2520composition%252C%2520soft%2520lighting%252C%2520subtle%2520shadows%252C%2520product%2520photography%2520style.&width=40&height=40&seq=17&orientation=squarish",
                  },
                  {
                    name: "Lemon Dressing",
                    quantity: "1 tbsp",
                    img: "https://readdy.ai/api/search-image?query=icon%252C%2520Realistic%2520food%252C%2520photorealistic%2520lemon%2520dressing%2520in%2520small%2520container%252C%2520high-detail%25203D%2520rendering%252C%2520prominent%2520main%2520subjects%252C%2520clear%2520and%2520sharp%252C%2520subject%2520fills%252080%2520percent%2520of%2520frame%252C%2520isolated%2520on%2520white%2520background%252C%2520centered%2520composition%252C%2520soft%2520lighting%252C%2520subtle%2520shadows%252C%2520product%2520photography%2520style.&width=40&height=40&seq=18&orientation=squarish",
                  },
                ].map((ingredient, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-100 mr-3">
                      <img
                        src={ingredient.img}
                        alt={ingredient.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <span className="text-sm text-gray-800">
                        {ingredient.name}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">
                      {ingredient.quantity}
                    </span>
                  </div>
                ))}
                <div
                  className="mt-4 text-center text-green-500 text-sm font-medium cursor-pointer"
                  onClick={() => setShowNutrition(!showNutrition)}
                >
                  View nutritional information
                </div>
              </div>
            )}
          </div>
          {/* Nutritional Information */}
          {showNutrition && (
            <div className="mb-6 bg-white rounded-xl p-4 shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg font-semibold text-gray-800">
                  Nutritional Information
                </h2>
                <i
                  className="fas fa-times text-gray-500 cursor-pointer"
                  onClick={() => setShowNutrition(false)}
                ></i>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">Calories</span>
                  <span className="text-sm font-medium text-gray-900">
                    380 kcal
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">Protein</span>
                  <span className="text-sm font-medium text-gray-900">12g</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">Carbohydrates</span>
                  <span className="text-sm font-medium text-gray-900">45g</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">Fat</span>
                  <span className="text-sm font-medium text-gray-900">18g</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">Fiber</span>
                  <span className="text-sm font-medium text-gray-900">9g</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-sm text-gray-700">Sodium</span>
                  <span className="text-sm font-medium text-gray-900">
                    320mg
                  </span>
                </div>
                <div className="mt-3 text-xs text-gray-500">
                  <p>Allergen information: Contains dairy (feta cheese)</p>
                </div>
              </div>
            </div>
          )}
          {/* Customization Options */}
          <div className="mb-6 bg-white rounded-xl p-4 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              Customize Your Bowl
            </h2>
            <div className="space-y-3">
              {Object.entries(customizations).map(([key, checked], index) => {
                const formattedKey = key
                  .split("_")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ");
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <label
                      htmlFor={`custom-${key}`}
                      className="text-sm text-gray-800 cursor-pointer flex-1"
                    >
                      {formattedKey}
                    </label>
                    <div
                      className={`w-5 h-5 rounded border flex items-center justify-center cursor-pointer ${
                        checked
                          ? "bg-green-500 border-green-500"
                          : "border-gray-300"
                      }`}
                      onClick={() => handleCustomizationChange(key)}
                    >
                      {checked && (
                        <i className="fas fa-check text-white text-xs"></i>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Add Extras */}
          <div className="mb-6 bg-white rounded-xl p-4 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              Add Extras
            </h2>
            <div className="space-y-3">
              {[
                {
                  key: "extra_avocado",
                  label: "Extra Avocado",
                  price: "+$1.50",
                },
                {
                  key: "grilled_chicken",
                  label: "Grilled Chicken",
                  price: "+$2.50",
                },
                { key: "tofu", label: "Tofu", price: "+$2.00" },
                { key: "mixed_nuts", label: "Mixed Nuts", price: "+$1.00" },
              ].map((extra, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <label
                      htmlFor={`extra-${extra.key}`}
                      className="text-sm text-gray-800 cursor-pointer"
                    >
                      {extra.label}
                    </label>
                    <span className="text-xs text-green-500 ml-2">
                      {extra.price}
                    </span>
                  </div>
                  <div
                    className={`w-5 h-5 rounded border flex items-center justify-center cursor-pointer ${
                      extras[extra.key as keyof typeof extras]
                        ? "bg-green-500 border-green-500"
                        : "border-gray-300"
                    }`}
                    onClick={() => handleExtrasChange(extra.key)}
                  >
                    {extras[extra.key as keyof typeof extras] && (
                      <i className="fas fa-check text-white text-xs"></i>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Portion Size Selection */}
          <div className="mb-6 bg-white rounded-xl p-4 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              Portion Size
            </h2>
            <div className="space-y-3">
              {[
                {
                  id: "regular",
                  label: "Regular",
                  calories: "380 kcal",
                  price: "",
                },
                {
                  id: "large",
                  label: "Large",
                  calories: "570 kcal",
                  price: "+$3.00",
                },
              ].map((size) => (
                <div
                  key={size.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex-1">
                    <label
                      htmlFor={`size-${size.id}`}
                      className="text-sm text-gray-800 cursor-pointer"
                    >
                      {size.label}
                    </label>
                    <div className="flex items-center">
                      <span className="text-xs text-gray-500">
                        {size.calories}
                      </span>
                      {size.price && (
                        <span className="text-xs text-green-500 ml-2">
                          {size.price}
                        </span>
                      )}
                    </div>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center cursor-pointer ${
                      selectedSize === size.id
                        ? "border-green-500"
                        : "border-gray-300"
                    }`}
                    onClick={() => setSelectedSize(size.id)}
                  >
                    {selectedSize === size.id && (
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Add to Cart Section */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex items-center max-w-[375px] mx-auto">
        <div className="flex items-center border border-gray-200 rounded-3xl !rounded-button overflow-hidden mr-4">
          <button
            className="w-10 h-10 flex items-center justify-center text-gray-500 cursor-pointer"
            onClick={decreaseQuantity}
          >
            <i className="fas fa-minus text-sm"></i>
          </button>
          <span className="w-8 text-center font-medium">{quantity}</span>
          <button
            className="w-10 h-10 flex items-center justify-center text-gray-500 cursor-pointer"
            onClick={increaseQuantity}
          >
            <i className="fas fa-plus text-sm"></i>
          </button>
        </div>
        <button
          id="addToCartBtn"
          onClick={() => {
            const toast = document.createElement("div");
            toast.id = "cartToast";
            toast.className =
              "fixed top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-white shadow-lg rounded-lg p-4 w-[90%] max-w-[340px] z-50 transition-transform duration-300 ease-out";
            toast.style.transform = "translate(-50%, -100%)";
            toast.innerHTML = `
<div class="flex items-start">
<div class="flex-1">
<h3 class="text-gray-800 font-medium">Added to Cart</h3>
<p class="text-sm text-gray-600 mt-1">Avocado Quinoa Bowl × ${quantity}</p>
<p class="text-sm text-green-500 font-medium mt-1">$${calculateTotalPrice()}</p>
</div>
<button onclick="this.parentElement.parentElement.remove()" class="text-gray-400 hover:text-gray-600">
<i class="fas fa-times"></i>
</button>
</div>
<a href="https://readdy.ai/home/9c93990c-9578-465a-823a-b16f698483a3/3d816106-9875-4c8c-a7b3-cdb05adeaeee" data-readdy="true">
  <button id="viewCartBtn" class="mt-3 w-full bg-green-500 text-white py-2 rounded-3xl !rounded-button text-sm font-medium">
    View Cart
  </button>
</a>
`;
            document.body.appendChild(toast);
            // Slide in animation
            requestAnimationFrame(() => {
              toast.style.transform = "translate(-50%, 20px)";
            });
            // Auto dismiss after 5 seconds
            setTimeout(() => {
              if (toast.parentElement) {
                toast.style.transform = "translate(-50%, -100%)";
                setTimeout(() => {
                  if (toast.parentElement) {
                    toast.remove();
                  }
                }, 300);
              }
            }, 5000);
          }}
          className="flex-1 bg-green-500 text-white py-3 rounded-3xl !rounded-button font-medium flex items-center justify-center"
        >
          <span>Add to Cart</span>
          <span className="ml-2">${calculateTotalPrice()}</span>
        </button>
      </div>
      {/* Tab Bar */}
      <div
        className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 grid grid-cols-4 max-w-[375px] mx-auto"
        style={{ bottom: "-60px" }}
      >
        {[
          { icon: "fas fa-home", label: "Home" },
          { icon: "fas fa-search", label: "Search" },
          { icon: "fas fa-heart", label: "Favorites" },
          { icon: "fas fa-user", label: "Profile" },
        ].map((tab, index) => (
          <div
            key={index}
            className={`flex flex-col items-center cursor-pointer text-gray-500`}
          >
            <i className={`${tab.icon} text-lg`}></i>
            <span className="text-xs mt-1">{tab.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BowlDetails;
