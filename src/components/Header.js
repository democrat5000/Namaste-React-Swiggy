import {CART_URL} from "../utils/constants";
import {LOGO_URL} from "../utils/constants"; 

const liStyle = "flex justify-center items-center ml-6 mb-2 h-12 w-40 p-2 font-bold border-2 border-black rounded-lg hover:bg-orange-600 hover:cursor-pointer bg-orange-500"

const headerStyle = "bg-ltorange flex justify-between w-screen z-10 border-b-2 border-b-gray-300 pt-4 pb-4"

const Header = ()=> {
  return(
  <div className={headerStyle}>
    <div className="w-6/12 flex justify-start items-center">
      <img  className="ml-6 w-32 h-19" src={LOGO_URL} alt="Company Logo"/>
    </div>
    <div className="flex justify-end  items-center w-6/12">
      <ul className="flex flex-wrap items-center">
        <li className={liStyle}>Home</li>
        <li className={liStyle}>About Us</li>
        <li className={liStyle}>Contact Us</li>
        <img className="ml-12 mr-12 h-10 w-10" src={CART_URL} alt="Shopping Cart" />
      </ul>
    </div>
  </div>
  );
}

export default Header;