
import "./FifthPage.scss";
import Button from "./Button.js";
export default function FifthPage() {
  return (
  	<div className="grid">
   		<div className="title">Meet The Team</div>
      <div className="fifth_page">

        <div className="each border-gradient border-gradient-purple">
          <div className="circle"></div>
          <div className="heading">Aveer Revankar</div>
          <div className="sub_heading">DeFi & Fin Tech.</div>
          <div className="meta">With Xeno you can deposite
and withdraw your money
anytime anywhere</div>
        </div>
        <div className="each border-gradient border-gradient-purple">
          <div className="circle"></div>
          <div className="heading">Co-Founder</div>
          <div className="sub_heading">Fintech, Banking</div>
          <div className="meta">Transparent like water. With us there will be zero transaction fees and no hidden charges.</div>
        </div>
        <div className="each border-gradient border-gradient-purple">
          <div className="circle"></div>
          <div className="heading">Aekum Kamboj</div>
          <div className="sub_heading">Defi & Fin Tech.</div>
          <div className="meta">Zeno provides upto 13%* p.a. interest on no lockin period investment.</div>
        </div>
        
      </div>
   
    </div>
  );
}
