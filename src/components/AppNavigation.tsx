import { Link, useLocation } from "react-router-dom";

const AppNavigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: "fas fa-home" },
    { path: "/foodSearch", label: "Search", icon: "fas fa-search" },
    { path: "/FavoritesSalad", label: "Favorite", icon: "fas fa-heart" },
    { path: "/profile", label: "Profile", icon: "fas fa-user" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 grid grid-cols-4 max-w-[375px] mx-auto">
      {navItems.map((tab, index) => (
        <Link
          key={index}
          to={tab.path}
          className={`flex flex-col items-center cursor-pointer ${
            location.pathname === tab.path ? "text-green-500" : "text-gray-500"
          }`}
        >
          <i className={`${tab.icon} text-lg`}></i>
          <span className="text-xs mt-1">{tab.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default AppNavigation;
