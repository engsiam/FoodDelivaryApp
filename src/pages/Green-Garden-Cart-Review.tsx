
import React, { useState, useEffect } from 'react';
const CartReview: React.FC = () => {
const [cartItems, setCartItems] = useState<{
id: number;
name: string;
price: number;
quantity: number;
image: string;
isVegetarian?: boolean;
isSpicy?: boolean;
}[]>([
{
id: 1,
name: "Avocado Toast",
price: 8.99,
quantity: 1,
image: "https://readdy.ai/api/search-image?query=Gourmet%252520avocado%252520toast%252520on%252520artisanal%252520sourdough%252520bread%252520with%252520perfectly%252520smashed%252520avocado%25252C%252520cherry%252520tomatoes%25252C%252520microgreens%25252C%252520and%252520a%252520drizzle%252520of%252520olive%252520oil.%252520Professional%252520food%252520photography%252520with%252520natural%252520lighting%252520on%252520a%252520minimalist%252520white%252520plate.%252520Clean%252520styling%252520with%252520no%252520text%252520or%252520watermarks.&width=80&height=80&seq=101&orientation=squarish",
isVegetarian: true
},
{
id: 2,
name: "Buddha Bowl",
price: 14.99,
quantity: 2,
image: "https://readdy.ai/api/search-image?query=Vibrant%252520Buddha%252520bowl%252520with%252520brown%252520rice%25252C%252520perfectly%252520roasted%252520vegetables%25252C%252520sliced%252520avocado%25252C%252520and%252520drizzled%252520with%252520creamy%252520tahini%252520dressing.%252520Professional%252520food%252520photography%252520with%252520natural%252520lighting%252520on%252520a%252520minimalist%252520white%252520plate.%252520Clean%252520styling%252520with%252520no%252520text%252520or%252520watermarks.&width=80&height=80&seq=104&orientation=squarish",
isVegetarian: true
},
{
id: 3,
name: "Sweet Potato Fries",
price: 5.99,
quantity: 1,
image: "https://readdy.ai/api/search-image?query=Crispy%252520sweet%252520potato%252520fries%252520with%252520a%252520side%252520of%252520creamy%252520chipotle%252520aioli%252520dipping%252520sauce.%252520Professional%252520food%252520photography%252520with%252520natural%252520lighting%252520on%252520a%252520minimalist%252520white%252520plate.%252520Clean%252520styling%252520with%252520no%252520text%252520or%252520watermarks.&width=80&height=80&seq=108&orientation=squarish",
isVegetarian: true
}
]);
const [subtotal, setSubtotal] = useState<number>(0);
const [tax, setTax] = useState<number>(0);
const [deliveryFee] = useState<number>(2.99);
const [total, setTotal] = useState<number>(0);
useEffect(() => {
const newSubtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
const newTax = newSubtotal * 0.08; // 8% tax rate
const newTotal = newSubtotal + newTax + deliveryFee;
setSubtotal(newSubtotal);
setTax(newTax);
setTotal(newTotal);
}, [cartItems, deliveryFee]);
const handleQuantityChange = (id: number, change: number) => {
setCartItems(prevItems =>
prevItems.map(item =>
item.id === id
? { ...item, quantity: Math.max(1, item.quantity + change) }
: item
)
);
};
const handleRemoveItem = (id: number) => {
setCartItems(prevItems => prevItems.filter(item => item.id !== id));
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
<a href="https://readdy.ai/home/9c93990c-9578-465a-823a-b16f698483a3/61b6bab1-456c-49e9-b4c0-317a943da574" data-readdy="true">
<i className="fas fa-arrow-left text-gray-800 mr-4 cursor-pointer"></i>
</a>
<h1 className="text-lg font-semibold text-gray-800">Your Cart</h1>
</div>
<div>
<i className="fas fa-ellipsis-v text-gray-800 cursor-pointer"></i>
</div>
</div>
{/* Main Content */}
<div className="pt-20 pb-36">
{cartItems.length > 0 ? (
<>
{/* Cart Items */}
<div className="px-4 mb-6">
<div className="space-y-4">
{cartItems.map((item) => (
<div key={item.id} className="flex bg-white rounded-xl shadow-sm p-3">
<div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
<img src={item.image} alt={item.name} className="w-full h-full object-cover" />
</div>
<div className="flex-1 ml-3">
<div className="flex items-center">
<h4 className="font-medium text-gray-800">{item.name}</h4>
{item.isVegetarian && (
<span className="ml-2 px-1.5 py-0.5 bg-green-100 text-green-700 text-xs rounded-sm">
<i className="fas fa-leaf text-xs mr-1"></i>Veg
</span>
)}
{item.isSpicy && (
<span className="ml-1 px-1.5 py-0.5 bg-red-100 text-red-700 text-xs rounded-sm">
<i className="fas fa-pepper-hot text-xs mr-1"></i>Spicy
</span>
)}
</div>
<div className="flex items-center justify-between mt-2">
<span className="font-medium text-gray-900">${item.price.toFixed(2)}</span>
</div>
<div className="flex items-center justify-between mt-3">
<div className="flex items-center">
<button
onClick={() => handleQuantityChange(item.id, -1)}
className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer !rounded-button"
>
<i className="fas fa-minus text-xs text-gray-600"></i>
</button>
<span className="mx-3 text-sm font-medium">{item.quantity}</span>
<button
onClick={() => handleQuantityChange(item.id, 1)}
className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer !rounded-button"
>
<i className="fas fa-plus text-xs text-gray-600"></i>
</button>
</div>
<span className="font-medium text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
</div>
<button
onClick={() => handleRemoveItem(item.id)}
className="text-red-500 text-xs mt-2 cursor-pointer"
>
<i className="fas fa-trash-alt text-xs mr-1"></i>
Remove
</button>
</div>
</div>
))}
</div>
</div>
{/* Delivery Instructions */}
<div className="px-4 mb-6">
<div className="bg-white rounded-xl shadow-sm p-4">
<h3 className="text-sm font-medium text-gray-800 mb-2">Delivery Instructions</h3>
<textarea
placeholder="Add any special instructions for delivery..."
className="w-full p-3 bg-gray-50 rounded-lg text-sm border-none focus:outline-none focus:ring-2 focus:ring-green-500 h-20 resize-none"
></textarea>
</div>
</div>
{/* Promo Code */}
<div className="px-4 mb-6">
<div className="bg-white rounded-xl shadow-sm p-4">
<h3 className="text-sm font-medium text-gray-800 mb-2">Promo Code</h3>
<div className="flex">
<input
type="text"
placeholder="Enter promo code"
className="flex-1 p-3 bg-gray-50 rounded-l-lg text-sm border-none focus:outline-none focus:ring-2 focus:ring-green-500"
/>
<button className="bg-green-500 text-white px-4 rounded-r-lg !rounded-button">
Apply
</button>
</div>
</div>
</div>
{/* Order Summary */}
<div className="px-4 mb-6">
<div className="bg-white rounded-xl shadow-sm p-4">
<h3 className="text-base font-semibold text-gray-800 mb-3">Order Summary</h3>
<div className="space-y-2">
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
<div className="border-t border-gray-200 my-2 pt-2">
<div className="flex justify-between">
<span className="font-semibold">Total</span>
<span className="font-semibold text-green-600">${total.toFixed(2)}</span>
</div>
</div>
</div>
</div>
</div>
</>
) : (
<div className="flex flex-col items-center justify-center px-4 py-10">
<div className="w-40 h-40 mb-6">
<img
src="https://readdy.ai/api/search-image?query=Empty%2520shopping%2520cart%2520illustration%2520with%2520minimalist%2520design%252C%2520soft%2520colors%252C%2520clean%2520lines%252C%2520and%2520simple%2520geometric%2520shapes.%2520The%2520cart%2520appears%2520slightly%2520tilted%2520with%2520a%2520subtle%2520shadow.%2520No%2520text%2520or%2520watermarks.%2520Professional%2520vector%2520style%2520with%2520smooth%2520gradients%2520on%2520white%2520background.&width=300&height=300&seq=201&orientation=squarish"
alt="Empty cart"
className="w-full h-full object-contain"
/>
</div>
<h2 className="text-xl font-semibold text-gray-800 mb-2">Your cart is empty</h2>
<p className="text-gray-600 text-center mb-6">Looks like you haven't added any items to your cart yet.</p>
<a
href="https://readdy.ai/home/9c93990c-9578-465a-823a-b16f698483a3/61b6bab1-456c-49e9-b4c0-317a943da574"
data-readdy="true"
className="bg-green-500 text-white py-3 px-6 rounded-full !rounded-button font-medium"
>
Start Shopping
</a>
</div>
)}
</div>
{/* Checkout Buttons */}
{cartItems.length > 0 && (
<div className="fixed bottom-16 left-0 right-0 px-4 pb-4 max-w-[375px] mx-auto">
<div className="bg-white p-4 rounded-t-xl shadow-lg border-t border-gray-100">
<div className="grid grid-cols-2 gap-3">
<a
href="https://readdy.ai/home/9c93990c-9578-465a-823a-b16f698483a3/61b6bab1-456c-49e9-b4c0-317a943da574"
data-readdy="true"
className="py-3 border border-green-500 text-green-500 rounded-3xl !rounded-button font-medium text-center"
>
Continue Shopping
</a>
<a 
  href="https://readdy.ai/home/9c93990c-9578-465a-823a-b16f698483a3/272a6a65-ae5d-4e95-a12b-35f08ac571c4" 
  data-readdy="true"
  className="py-3 bg-green-500 text-white rounded-3xl !rounded-button font-medium text-center"
>
  Proceed to Checkout
</a>
</div>
</div>
</div>
)}
{/* Tab Bar */}
<div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 grid grid-cols-4 max-w-[375px] mx-auto">
{[
{ icon: "fas fa-home", label: "Home" },
{ icon: "fas fa-search", label: "Search" },
{ icon: "fas fa-shopping-cart", label: "Cart", active: true },
{ icon: "fas fa-user", label: "Profile" }
].map((tab, index) => (
<div key={index} className={`flex flex-col items-center cursor-pointer ${tab.active ? 'text-green-500' : 'text-gray-500'}`}>
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
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
-webkit-appearance: none;
margin: 0;
}
`}</style>
</div>
);
};
export default CartReview
