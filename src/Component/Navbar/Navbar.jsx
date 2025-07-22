import styled from "./navbar.module.css"
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <div className={styled.header} >
      <div className="container">
           <ul>
    <li><Link to ="/">
    home</Link></li>
    <li>contact</li>
    <li> <Link to ="/about">
    about</Link></li>
    


    </ul>
   
      
      </div>
    
      
      
    </div>
  );
}

export default Navbar;