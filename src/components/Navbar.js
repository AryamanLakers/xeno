import "./navbar.scss";
import Button from "./Button.js";
export default function Navbar() {
  return (
    <div className="navbar_outer">
    	<div className="navbar">
        <a href="/"className="logo"><div id="inner_logo">Xeno</div></a>
        <a href="/faq" className="common" id="FAQs">FAQs</a>
        <a href="/privacy" className="common" id="Privacy_Policy">Privacy Policy</a>
        <a href="/aml" className="common" id="AML">AML</a>
        <a href="/t&c" className="common" id="T&C">T&C</a>

        <button className="sign_up">Login</button>
        <button className="sign_in">Sign Up</button>
        
     	</div>
      <div className="line1-1"></div>
    </div>
  );
}
