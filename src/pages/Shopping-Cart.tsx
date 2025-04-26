import React, { useState } from "react";
import { Link } from "react-router-dom";
import BakcButtob from "../components/BakcButtob";
const Cart: React.FC = () => {
  const [promoCode, setPromoCode] = useState("");
  const [isPromoApplied, setIsPromoApplied] = useState(false);
  const [showPromoError, setShowPromoError] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const itemPrice = 14.5;
  const extraAvocado = 1.5;
  const deliveryFee = 2.99;
  const taxRate = 0.0825; // 8.25% tax rate
  const calculateSubtotal = () => {
    return (itemPrice + extraAvocado) * quantity;
  };
  const calculateTax = () => {
    return calculateSubtotal() * taxRate;
  };
  const calculateTotal = () => {
    let total = calculateSubtotal() + calculateTax() + deliveryFee;
    if (isPromoApplied) {
      total = total - 5; // $5 off promo
    }
    return total;
  };
  const handleApplyPromo = () => {
    if (promoCode.toUpperCase() === "FRESH25") {
      setIsPromoApplied(true);
      setShowPromoError(false);
    } else {
      setShowPromoError(true);
      setIsPromoApplied(false);
    }
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
          <h1 className="text-lg font-semibold text-gray-800">Cart</h1>
        </div>
      </div>
      {/* Main Content */}
      <div className="pt-20 pb-24">
        {/* Cart Items */}
        <div className="px-4 mb-4">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-4">
            <a
              href="https://readdy.ai/home/9c93990c-9578-465a-823a-b16f698483a3/3a178e80-6b76-45fd-bf45-5e92016df4c5"
              data-readdy="true"
              className="cursor-pointer"
            >
              <div className="p-4 flex items-start">
                <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 mr-3 flex-shrink-0">
                  <img
                    src="https://readdy.ai/api/search-image?query=Overhead%2520view%2520of%2520a%2520beautiful%2520avocado%2520quinoa%2520bowl%2520with%2520fresh%2520ingredients.%2520A%2520wooden%2520bowl%2520filled%2520with%2520fluffy%2520quinoa%252C%2520sliced%2520avocado%252C%2520cherry%2520tomatoes%252C%2520cucumber%252C%2520red%2520onion%252C%2520and%2520feta%2520cheese.%2520Professional%2520food%2520photography%2520with%2520natural%2520lighting%2520on%2520dark%2520background.&width=80&height=80&seq=20&orientation=squarish"
                    alt="Avocado Quinoa Bowl"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900 font-medium mb-1">
                    Avocado Quinoa Bowl
                  </h3>
                  <div className="text-xs text-gray-500 mb-2">
                    <p>Regular size</p>
                    <p>Extra avocado (+$1.50)</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-gray-200 rounded-3xl !rounded-button overflow-hidden">
                      <button
                        className="w-8 h-8 flex items-center justify-center text-gray-500 cursor-pointer"
                        onClick={decreaseQuantity}
                      >
                        <i className="fas fa-minus text-xs"></i>
                      </button>
                      <span className="w-6 text-center text-sm font-medium">
                        {quantity}
                      </span>
                      <button
                        className="w-8 h-8 flex items-center justify-center text-gray-500 cursor-pointer"
                        onClick={increaseQuantity}
                      >
                        <i className="fas fa-plus text-xs"></i>
                      </button>
                    </div>
                    <div className="text-gray-900 font-medium">
                      ${((itemPrice + extraAvocado) * quantity).toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <div className="border-t border-gray-100 px-4 py-3 flex justify-between items-center">
              <button className="text-gray-500 text-sm flex items-center cursor-pointer">
                <i className="fas fa-trash-alt text-xs mr-2"></i>
                <span>Remove</span>
              </button>
              <a
                href="https://readdy.ai/home/9c93990c-9578-465a-823a-b16f698483a3/3a178e80-6b76-45fd-bf45-5e92016df4c5"
                data-readdy="true"
                className="text-green-500 text-sm flex items-center cursor-pointer"
              >
                <i className="fas fa-pen text-xs mr-2"></i>
                <span>Edit</span>
              </a>
            </div>
          </div>
        </div>
        {/* Promo Code Section */}
        <div className="px-4 mb-6">
          <div className="bg-white rounded-xl shadow-sm p-4">
            <h2 className="text-gray-800 font-medium mb-3">Promo Code</h2>
            <div className="flex items-center">
              <div className="flex-1 mr-3 relative">
                <input
                  type="text"
                  placeholder="Enter promo code"
                  className="w-full border border-gray-200 rounded-3xl !rounded-button py-2 px-4 text-sm focus:outline-none focus:border-green-500"
                  value={promoCode}
                  onChange={(e) => {
                    setPromoCode(e.target.value);
                    setShowPromoError(false);
                  }}
                />
                {showPromoError && (
                  <p className="text-red-500 text-xs mt-1 absolute">
                    Invalid promo code
                  </p>
                )}
              </div>
              <button
                onClick={handleApplyPromo}
                className="bg-green-500 text-white py-2 px-4 rounded-3xl !rounded-button text-sm font-medium cursor-pointer"
              >
                Apply
              </button>
            </div>
            {isPromoApplied && (
              <div className="mt-3 bg-green-50 p-3 rounded-lg flex justify-between items-center">
                <div>
                  <p className="text-green-600 font-medium text-sm">FRESH25</p>
                  <p className="text-green-500 text-xs">$5.00 off your order</p>
                </div>
                <button
                  className="text-gray-400 cursor-pointer"
                  onClick={() => {
                    setIsPromoApplied(false);
                    setPromoCode("");
                  }}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            )}
          </div>
        </div>
        {/* Order Summary */}
        <div className="px-4 mb-6">
          <div className="bg-white rounded-xl shadow-sm p-4">
            <h2 className="text-gray-800 font-medium mb-3">Order Summary</h2>
            <div className="space-y-3">
              <div className="flex justify-between py-1">
                <span className="text-gray-600 text-sm">Subtotal</span>
                <span className="text-gray-800 text-sm">
                  ${calculateSubtotal().toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-gray-600 text-sm">Delivery Fee</span>
                <span className="text-gray-800 text-sm">
                  ${deliveryFee.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-gray-600 text-sm">Tax</span>
                <span className="text-gray-800 text-sm">
                  ${calculateTax().toFixed(2)}
                </span>
              </div>
              {isPromoApplied && (
                <div className="flex justify-between py-1 text-green-500">
                  <span className="text-sm">Promo (FRESH25)</span>
                  <span className="text-sm">-$5.00</span>
                </div>
              )}
              <div className="border-t border-gray-100 pt-3 mt-2 flex justify-between">
                <span className="text-gray-900 font-medium">Total</span>
                <span className="text-gray-900 font-medium">
                  ${calculateTotal().toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Delivery Time Estimate */}
        <div className="px-4 mb-6">
          <div className="bg-white rounded-xl shadow-sm p-4 flex items-center">
            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mr-3">
              <i className="fas fa-clock text-green-500"></i>
            </div>
            <div>
              <p className="text-gray-800 font-medium text-sm">
                Estimated Delivery Time
              </p>
              <p className="text-gray-500 text-xs">25-35 minutes</p>
            </div>
          </div>
        </div>
      </div>
      {/* Checkout Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 max-w-[375px] mx-auto">
        <Link
          to="/checkout"
          data-readdy="true"
          className="block"
        >
          <button className="w-full bg-green-500 text-white py-3 rounded-3xl !rounded-button font-medium flex items-center justify-center cursor-pointer">
            <span>Checkout</span>
            <span className="ml-2">${calculateTotal().toFixed(2)}</span>
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Cart;
