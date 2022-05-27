import "./navbar.scss";
import Button from "./Button.js";
export default function Navbar() {
  return (
    <div className="navbar_outer">
    	<div className="navbar">
        <div className="logo">Xeno</div>
        <button className="sign_up">Sign Up</button>
        <button className="sign_in">Sign In</button>
        
     	</div>
      <div className="line"></div>
    </div>
  );
}
