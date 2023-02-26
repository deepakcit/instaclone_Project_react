import landingPageImage from "../images/lens-1418954@2x.jpg";
import { Link } from "react-router-dom";
import "../styles/landingPage.css";

const LandingPage = () => {
    return <div id="landingPage">
        <img id="landingImage" src={landingPageImage} alt="LandingPage" />
        <div id="landingPageTitle">
            <h1 id="titleText">10x Team 04</h1>
            <Link to="/postview">
                <button id="enterButton">Enter</button>
            </Link>
        </div>
    </div>
}

export default LandingPage;