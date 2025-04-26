import { useNavigate } from "react-router-dom";

const BakcButtob = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      data-readdy="true"
      className="cursor-pointer"
    >
      <i className="fas fa-arrow-left text-gray-800 mr-4"></i>
    </button>
  );
};

export default BakcButtob;
