import React, { useEffect, useState } from "react";
import BakcButtob from "../components/BakcButtob";
import AppNavigation from "../components/AppNavigation";
const Checkout: React.FC = () => {
  const [cartItems, setCartItems] = useState<
    {
      id: number;
      name: string;
      price: number;
      quantity: number;
      image: string;
      isVegetarian?: boolean;
      isSpicy?: boolean;
    }[]
  >([
    {
      id: 1,
      name: "Avocado Toast",
      price: 8.99,
      quantity: 1,
      image:
        "https://readdy.ai/api/search-image?query=Gourmet%25252520avocado%25252520toast%25252520on%25252520artisanal%25252520sourdough%25252520bread%25252520with%25252520perfectly%25252520smashed%25252520avocado%2525252C%25252520cherry%25252520tomatoes%2525252C%25252520microgreens%2525252C%25252520and%25252520a%25252520drizzle%25252520of%25252520olive%25252520oil.%25252520Professional%25252520food%25252520photography%25252520with%25252520natural%25252520lighting%25252520on%25252520a%25252520minimalist%25252520white%25252520plate.%25252520Clean%25252520styling%25252520with%25252520no%25252520text%25252520or%25252520watermarks.&width=80&height=80&seq=101&orientation=squarish",
      isVegetarian: true,
    },
    {
      id: 2,
      name: "Buddha Bowl",
      price: 14.99,
      quantity: 2,
      image:
        "https://readdy.ai/api/search-image?query=Vibrant%25252520Buddha%25252520bowl%25252520with%25252520brown%25252520rice%2525252C%25252520perfectly%25252520roasted%25252520vegetables%2525252C%25252520sliced%25252520avocado%2525252C%25252520and%25252520drizzled%25252520with%25252520creamy%25252520tahini%25252520dressing.%25252520Professional%25252520food%25252520photography%25252520with%25252520natural%25252520lighting%25252520on%25252520a%25252520minimalist%25252520white%25252520plate.%25252520Clean%25252520styling%25252520with%25252520no%25252520text%25252520or%25252520watermarks.&width=80&height=80&seq=104&orientation=squarish",
      isVegetarian: true,
    },
    {
      id: 3,
      name: "Sweet Potato Fries",
      price: 5.99,
      quantity: 1,
      image:
        "https://readdy.ai/api/search-image?query=Crispy%25252520sweet%25252520potato%25252520fries%25252520with%25252520a%25252520side%25252520of%25252520creamy%25252520chipotle%25252520aioli%25252520dipping%25252520sauce.%25252520Professional%25252520food%25252520photography%25252520with%25252520natural%25252520lighting%25252520on%25252520a%25252520minimalist%25252520white%25252520plate.%25252520Clean%25252520styling%25252520with%25252520no%25252520text%25252520or%25252520watermarks.&width=80&height=80&seq=108&orientation=squarish",
      isVegetarian: true,
    },
  ]);
  const [subtotal, setSubtotal] = useState<number>(0);
  const [tax, setTax] = useState<number>(0);
  const [deliveryFee, setDeliveryFee] = useState<number>(2.99);
  const [total, setTotal] = useState<number>(0);
  const [selectedAddress, setSelectedAddress] = useState<number>(1);
  const [selectedPayment, setSelectedPayment] = useState<number>(1);
  const [showOrderDetails, setShowOrderDetails] = useState<boolean>(true);
  useEffect(() => {
    const newSubtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const newTax = newSubtotal * 0.08; // 8% tax rate
    const newTotal = newSubtotal + newTax + deliveryFee;
    setSubtotal(newSubtotal);
    setTax(newTax);
    setTotal(newTotal);
  }, [cartItems, deliveryFee]);
  const addresses = [
    {
      id: 1,
      type: "home",
      name: "Michael Johnson",
      address: "123 Green Street, Apt 4B",
      city: "San Francisco",
      state: "CA",
      zip: "94107",
      phone: "(415) 555-1234",
    },
    {
      id: 2,
      type: "work",
      name: "Michael Johnson",
      address: "456 Market Avenue, Suite 200",
      city: "San Francisco",
      state: "CA",
      zip: "94103",
      phone: "(415) 555-5678",
    },
  ];
  const paymentMethods = [
    {
      id: 1,
      type: "credit",
      name: "Visa ending in 4242",
      icon: "fa-credit-card",
    },
    {
      id: 2,
      type: "wallet",
      name: "Apple Pay",
      icon: "fa-apple-pay",
    },
  ];
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
          <BakcButtob />
          <h1 className="text-lg font-semibold text-gray-800">Checkout</h1>
        </div>
        <div>
          <i className="fas fa-ellipsis-v text-gray-800 cursor-pointer"></i>
        </div>
      </div>
      {/* Main Content */}
      <div className="pt-20 pb-36">
        {/* Delivery Address Section */}
        <div className="px-4 mb-6">
          <h3 className="text-base font-semibold text-gray-800 mb-3">
            Delivery Address
          </h3>
          <div className="space-y-3">
            {addresses.map((address) => (
              <div
                key={address.id}
                className={`bg-white rounded-xl shadow-sm p-4 border ${
                  selectedAddress === address.id
                    ? "border-green-500"
                    : "border-transparent"
                }`}
                onClick={() => setSelectedAddress(address.id)}
              >
                <div className="flex items-start">
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded capitalize">
                        <i
                          className={`fas ${
                            address.type === "home" ? "fa-home" : "fa-building"
                          } mr-1`}
                        ></i>
                        {address.type}
                      </span>
                      <span className="ml-auto text-gray-500 text-xs cursor-pointer">
                        Edit
                      </span>
                    </div>
                    <h4 className="font-medium text-gray-800">
                      {address.name}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {address.address}
                    </p>
                    <p className="text-sm text-gray-600">
                      {address.city}, {address.state} {address.zip}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      {address.phone}
                    </p>
                  </div>
                  <div className="ml-3 mt-1">
                    <div
                      className={`w-5 h-5 rounded-full border ${
                        selectedAddress === address.id
                          ? "border-green-500"
                          : "border-gray-300"
                      } flex items-center justify-center`}
                    >
                      {selectedAddress === address.id && (
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <button className="w-full bg-gray-50 rounded-xl p-4 flex items-center justify-center cursor-pointer !rounded-button">
              <i className="fas fa-plus text-green-500 mr-2"></i>
              <span className="text-green-500 font-medium">
                Add New Address
              </span>
            </button>
          </div>
        </div>
        {/* Payment Method Section */}
        <div className="px-4 mb-6">
          <h3 className="text-base font-semibold text-gray-800 mb-3">
            Payment Method
          </h3>
          <div className="space-y-3">
            {paymentMethods.map((payment) => (
              <div
                key={payment.id}
                className={`bg-white rounded-xl shadow-sm p-4 border ${
                  selectedPayment === payment.id
                    ? "border-green-500"
                    : "border-transparent"
                }`}
                onClick={() => setSelectedPayment(payment.id)}
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <i className={`fas ${payment.icon} text-gray-600`}></i>
                  </div>
                  <div className="ml-3 flex-1">
                    <h4 className="font-medium text-gray-800">
                      {payment.name}
                    </h4>
                  </div>
                  <div>
                    <div
                      className={`w-5 h-5 rounded-full border ${
                        selectedPayment === payment.id
                          ? "border-green-500"
                          : "border-gray-300"
                      } flex items-center justify-center`}
                    >
                      {selectedPayment === payment.id && (
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <button className="w-full bg-gray-50 rounded-xl p-4 flex items-center justify-center cursor-pointer !rounded-button">
              <i className="fas fa-plus text-green-500 mr-2"></i>
              <span className="text-green-500 font-medium">
                Add Payment Method
              </span>
            </button>
          </div>
        </div>
        {/* Order Review Section */}
        <div className="px-4 mb-6">
          <div className="bg-white rounded-xl shadow-sm p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base font-semibold text-gray-800">
                Order Review
              </h3>
              <button
                className="text-green-500 text-sm flex items-center cursor-pointer"
                onClick={() => setShowOrderDetails(!showOrderDetails)}
              >
                {showOrderDetails ? "Hide" : "Show"}
                <i
                  className={`fas fa-chevron-${
                    showOrderDetails ? "up" : "down"
                  } ml-1 text-xs`}
                ></i>
              </button>
            </div>
            {showOrderDetails && (
              <div className="space-y-3 mb-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center">
                    <div className="w-12 h-12 rounded-lg overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-3 flex-1">
                      <h4 className="text-sm font-medium text-gray-800">
                        {item.name}
                      </h4>
                      <div className="flex items-center text-xs text-gray-500">
                        <span>Qty: {item.quantity}</span>
                      </div>
                    </div>
                    <span className="font-medium text-gray-800">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            )}
            <div className="border-t border-gray-100 pt-3 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Tax (8%)</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Delivery Fee</span>
                <span className="font-medium">${deliveryFee.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-100 my-2 pt-2">
                <div className="flex justify-between">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold text-green-600">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4 bg-green-50 rounded-lg p-3 flex items-center">
              <i className="fas fa-clock text-green-500 mr-2"></i>
              <div>
                <span className="text-sm text-gray-700">
                  Estimated Delivery Time
                </span>
                <p className="text-sm font-medium text-gray-800">
                  25-35 minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Place Order Button */}
      <div className="fixed bottom-16 left-0 right-0 px-4 pb-4 max-w-[375px] mx-auto">
        <div className="bg-white p-4 rounded-t-xl shadow-lg border-t border-gray-100">
          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-700">Total</span>
            <span className="text-xl font-semibold text-green-600">
              ${total.toFixed(2)}
            </span>
          </div>
          <button className="w-full py-3.5 bg-green-500 text-white rounded-3xl !rounded-button font-medium">
            Place Order
          </button>
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
export default Checkout;
