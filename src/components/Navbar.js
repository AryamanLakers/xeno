import "./navbar.scss";
import Button from "./Button.js";
export default function Navbar() {
  return (
    <div className="navbar_outer">
    	<div className="navbar">
        <a href="/"className="logo"><div id="inner_logo">Xeno</div></a>
        <button className="sign_up">Login</button>
        <button className="sign_in">Sign Up</button>
        
     	</div>
      <div className="line1-1"></div>
    </div>
  );
}
