import "../styles/header.css"
import logo from "../images/icon@2x.jpg";
import camera from "../images/camera@2x.jpg";
import { Link } from "react-router-dom";

const Header = () => {
    return <div id="headerContainer">
        <img className="logo" id="headerlogo" src={logo} alt="logo" />
        <h1 id="headerText">InstaClone</h1>
        <Link to="/upload">
            <img className="logo" id="headercamera" src={camera} alt="camera" />
        </Link>
    </div>
}
export default Header;