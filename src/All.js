import Pagination from "./Pagination";
import Search from "./Search";
import Stories from "./Stories";
import { useNavigate } from "react-router-dom";
import "./App.css";
function All() {
  const name = localStorage.getItem("name");
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the user's name from local storage (and any other relevant data)
    localStorage.removeItem("name");
    // Redirect to the login page
    navigate("/");
  };
  return (
    <div className="navigation-container">
    <div className="user-card">
      <div className="user-info">
        <b className="user-name">{name} 👤</b>
      </div>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>

    

      <Search></Search>
      <Pagination></Pagination>
      <Stories></Stories>
    </div>
  );
}

export default All;
