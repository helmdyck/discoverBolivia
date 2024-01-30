import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-container">
        <div className="nav__body">
          <p className="nav-logo">HELMUTH DYCK</p>
          <div className="pages">
            <p>explore</p>
            <p>about</p>
          </div>
        </div>
      
    </div>
  );
}

export default Navbar;
