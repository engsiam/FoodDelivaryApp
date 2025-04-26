
import AppNavigation from "../components/AppNavigation";

const Profile: React.FC = () => {
  // const [activeSection, setActiveSection] = useState<string>("profile");

  const user = {
    name: "Michael Johnson",
    email: "michael.johnson@example.com",
    phone: "(415) 555-1234",
    profileImage:
      "https://readdy.ai/api/search-image?query=Professional%20portrait%20photograph%20of%20a%2030-year-old%20man%20with%20short%20brown%20hair%20and%20friendly%20smile%2C%20wearing%20a%20casual%20button-up%20shirt%2C%20natural%20lighting%2C%20high%20quality%2C%20clean%20background%2C%20modern%20professional%20headshot%20style%2C%20clear%20facial%20features%2C%20warm%20expression%2C%20studio%20quality&width=120&height=120&seq=201&orientation=squarish",
  };

  const addresses = [
    {
      id: 1,
      type: "home",
      address: "123 Green Street, Apt 4B",
      city: "San Francisco",
      state: "CA",
      zip: "94107",
    },
    {
      id: 2,
      type: "work",
      address: "456 Market Avenue, Suite 200",
      city: "San Francisco",
      state: "CA",
      zip: "94103",
    },
  ];

  const paymentMethods = [
    {
      id: 1,
      type: "Visa",
      lastFour: "4242",
      expiryDate: "05/26",
      icon: "fa-cc-visa",
    },
    {
      id: 2,
      type: "Mastercard",
      lastFour: "8765",
      expiryDate: "11/25",
      icon: "fa-cc-mastercard",
    },
  ];

  const orderHistory = [
    {
      id: "ORD-7845",
      date: "April 18, 2025",
      total: 29.97,
      items: ["Buddha Bowl (2)", "Sweet Potato Fries"],
      status: "Delivered",
    },
    {
      id: "ORD-6532",
      date: "April 10, 2025",
      total: 24.98,
      items: ["Avocado Toast", "Quinoa Salad", "Green Smoothie"],
      status: "Delivered",
    },
    {
      id: "ORD-5421",
      date: "March 28, 2025",
      total: 35.45,
      items: ["Plant-Based Burger", "Kale Chips", "Coconut Water"],
      status: "Delivered",
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
        <h1 className="text-lg font-semibold text-gray-800">Profile</h1>
        <button className="text-green-500 cursor-pointer !rounded-button">
          <i className="fas fa-pen text-sm"></i>
          <span className="ml-1 text-sm">Edit</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="pt-20 pb-20">
        {/* Profile Header */}
        <div className="flex flex-col items-center px-4 py-6 border-b border-gray-100">
          <div className="w-24 h-24 rounded-full overflow-hidden mb-3 border-2 border-green-500">
            <img
              src={user.profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
          <p className="text-gray-600 text-sm mt-1">{user.email}</p>
          <p className="text-gray-600 text-sm">{user.phone}</p>
          <button className="mt-4 px-5 py-2 bg-green-500 text-white rounded-full text-sm font-medium !rounded-button">
            Edit Profile
          </button>
        </div>

        {/* Account Sections */}
        <div className="px-4 py-3">
          <h3 className="text-base font-semibold text-gray-800 mb-3">
            Saved Addresses
          </h3>
          <div className="space-y-3 mb-4">
            {addresses.map((address) => (
              <a
                key={address.id}
                href="https://readdy.ai/home/9c93990c-9578-465a-823a-b16f698483a3/272a6a65-ae5d-4e95-a12b-35f08ac571c4"
                data-readdy="true"
                className="block bg-white rounded-xl shadow-sm p-4 cursor-pointer"
              >
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <i
                      className={`fas ${
                        address.type === "home" ? "fa-home" : "fa-building"
                      } text-green-600`}
                    ></i>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded capitalize">
                        {address.type}
                      </span>
                      <span className="ml-auto text-green-500 text-xs">
                        Edit
                      </span>
                    </div>
                    <p className="text-sm text-gray-800">{address.address}</p>
                    <p className="text-sm text-gray-600">
                      {address.city}, {address.state} {address.zip}
                    </p>
                  </div>
                </div>
              </a>
            ))}
            <button className="w-full bg-gray-50 rounded-xl p-3 flex items-center justify-center cursor-pointer !rounded-button">
              <i className="fas fa-plus text-green-500 mr-2"></i>
              <span className="text-green-500 font-medium text-sm">
                Add New Address
              </span>
            </button>
          </div>

          <h3 className="text-base font-semibold text-gray-800 mb-3 mt-6">
            Payment Methods
          </h3>
          <div className="space-y-3 mb-4">
            {paymentMethods.map((payment) => (
              <a
                key={payment.id}
                href="https://readdy.ai/home/9c93990c-9578-465a-823a-b16f698483a3/272a6a65-ae5d-4e95-a12b-35f08ac571c4"
                data-readdy="true"
                className="block bg-white rounded-xl shadow-sm p-4 cursor-pointer"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <i className={`fab ${payment.icon} text-xl`}></i>
                  </div>
                  <div className="ml-3 flex-1">
                    <h4 className="font-medium text-gray-800">
                      {payment.type} •••• {payment.lastFour}
                    </h4>
                    <p className="text-xs text-gray-500">
                      Expires {payment.expiryDate}
                    </p>
                  </div>
                  <span className="text-green-500 text-xs">Edit</span>
                </div>
              </a>
            ))}
            <button className="w-full bg-gray-50 rounded-xl p-3 flex items-center justify-center cursor-pointer !rounded-button">
              <i className="fas fa-plus text-green-500 mr-2"></i>
              <span className="text-green-500 font-medium text-sm">
                Add Payment Method
              </span>
            </button>
          </div>

          <h3 className="text-base font-semibold text-gray-800 mb-3 mt-6">
            Order History
          </h3>
          <div className="space-y-3 mb-4">
            {orderHistory.map((order) => (
              <div key={order.id} className="bg-white rounded-xl shadow-sm p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium text-gray-800">{order.id}</h4>
                    <p className="text-xs text-gray-500">{order.date}</p>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  {order.items.join(", ")}
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-800">
                    ${order.total.toFixed(2)}
                  </span>
                  <a
                    href="https://readdy.ai/home/9c93990c-9578-465a-823a-b16f698483a3/272a6a65-ae5d-4e95-a12b-35f08ac571c4"
                    data-readdy="true"
                    className="text-green-500 text-sm cursor-pointer"
                  >
                    View Details
                  </a>
                </div>
              </div>
            ))}
            <button className="w-full bg-gray-50 rounded-xl p-3 flex items-center justify-center cursor-pointer !rounded-button">
              <span className="text-green-500 font-medium text-sm">
                View All Orders
              </span>
              <i className="fas fa-chevron-right text-green-500 ml-1 text-xs"></i>
            </button>
          </div>

          <h3 className="text-base font-semibold text-gray-800 mb-3 mt-6">
            Account Settings
          </h3>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-4">
            <div className="divide-y divide-gray-100">
              <div className="flex justify-between items-center p-4 cursor-pointer">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <i className="fas fa-bell text-green-600"></i>
                  </div>
                  <span className="text-gray-800">Notifications</span>
                </div>
                <div className="relative">
                  <input
                    type="checkbox"
                    id="notifications"
                    className="sr-only"
                    defaultChecked
                  />
                  <label
                    htmlFor="notifications"
                    className="flex items-center cursor-pointer"
                  >
                    <div className="relative w-10 h-6 bg-gray-200 rounded-full transition-colors duration-200 ease-in-out">
                      <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition-transform duration-200 ease-in-out transform translate-x-4"></div>
                    </div>
                  </label>
                </div>
              </div>

              <div className="flex justify-between items-center p-4 cursor-pointer">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <i className="fas fa-globe text-green-600"></i>
                  </div>
                  <span className="text-gray-800">Language</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-600 text-sm mr-2">English</span>
                  <i className="fas fa-chevron-right text-gray-400 text-xs"></i>
                </div>
              </div>

              <div className="flex justify-between items-center p-4 cursor-pointer">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <i className="fas fa-moon text-green-600"></i>
                  </div>
                  <span className="text-gray-800">Dark Mode</span>
                </div>
                <div className="relative">
                  <input type="checkbox" id="darkmode" className="sr-only" />
                  <label
                    htmlFor="darkmode"
                    className="flex items-center cursor-pointer"
                  >
                    <div className="relative w-10 h-6 bg-gray-200 rounded-full transition-colors duration-200 ease-in-out">
                      <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition-transform duration-200 ease-in-out"></div>
                    </div>
                  </label>
                </div>
              </div>

              <div className="flex justify-between items-center p-4 cursor-pointer">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <i className="fas fa-shield-alt text-green-600"></i>
                  </div>
                  <span className="text-gray-800">Privacy Settings</span>
                </div>
                <i className="fas fa-chevron-right text-gray-400 text-xs"></i>
              </div>

              <div className="flex justify-between items-center p-4 cursor-pointer">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <i className="fas fa-question-circle text-green-600"></i>
                  </div>
                  <span className="text-gray-800">Help & Support</span>
                </div>
                <i className="fas fa-chevron-right text-gray-400 text-xs"></i>
              </div>

              <div className="flex justify-between items-center p-4 cursor-pointer">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <i className="fas fa-file-alt text-green-600"></i>
                  </div>
                  <span className="text-gray-800">Terms & Conditions</span>
                </div>
                <i className="fas fa-chevron-right text-gray-400 text-xs"></i>
              </div>
            </div>
          </div>

          <button className="w-full bg-red-50 text-red-600 rounded-xl p-4 flex items-center justify-center cursor-pointer mt-4 mb-8 !rounded-button">
            <i className="fas fa-sign-out-alt mr-2"></i>
            <span className="font-medium">Log Out</span>
          </button>
        </div>
      </div>

      {/* Tab Bar */}
     <AppNavigation />

      {/* Custom Styles */}
      <style>{`
        input[type="checkbox"]:checked + label div {
          background-color: #22c55e;
        }
        input[type="checkbox"]:checked + label div div {
          transform: translateX(100%);
        }
      `}</style>
    </div>
  );
};

export default Profile;
