import './Header.css';
import { Link } from "react-router-dom";
const Header = ()=>{
   
    return(
        <div className="header">
        <div className="img">
        <div>
        <img className="img-1" src="./icons/name.jpg" alt="insta-Icon" />
        </div>
        <div>
        <Link to='/addpost'><img className="img-2" src="./icons/camera-icon.png" alt="Camera-icon" /></Link>
        </div>
      </div>
      <div className="line"></div>
      <div className="space"></div>
    </div>
    )
}
export default Header;