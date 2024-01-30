import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-container">
        <div className="nav__body">
          <p className="nav-logo">HELMUTH DYCK</p>
          <div className="pages">
            <i className="bi bi-grid-3x3-gap-fill"></i>
            <i className="bi bi-info-square-fill"></i>
          </div>
        </div>
      
    </div>
  );
}

export default Navbar;
