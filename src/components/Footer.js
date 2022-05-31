import "./Footer.scss";
import Button from "./Button.js";
export default function Footer() {
  return (
    <div className="outer">
    	<div className="footer">
        <div className="logo">Xeno</div>
        <div className="common">About us</div>
        <a href="t&c" className="common">Terms</a>
        <a href="faq" className="common">FAQs</a>
        <a href="aml" className="common">Anti Money Laundering</a>
     	</div>
      <div className="line"></div>
    </div>
  );
}
