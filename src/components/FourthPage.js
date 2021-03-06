import "./FourthPage.scss";
import Button from "./Button.js";
export default function FirstPage() {
  return (
   
      <div className="fourth_page1">

        <div  data-aos-duration="1000" data-aos-offset="100" data-aos="slide-down" className="each border-gradient border-gradient-purple">
          <div className="circle"><div className="circle1"></div></div>
          <div className="heading">Depsite & withdraw </div>
          <div className="sub_heading">at anytime</div>
          <div className="meta">With Xeno you can deposite
          and withdraw your money
          anytime anywhere</div>
        </div>
        <div  data-aos-duration="1000" data-aos-offset="100" data-aos="slide-up" className="each border-gradient border-gradient-purple">
          <div className="circle"><div className="circle2" /></div>
          <div className="heading">Transaction fees </div>
          <div className="sub_heading">zero</div>
          <div className="meta">Transparent like water. With us there will be zero transaction fees and no hidden charges.</div>
        </div>
        <div  data-aos-duration="1000" data-aos-offset="100" data-aos="slide-down" className="each border-gradient border-gradient-purple">
          <div className="circle"><div className="circle3" /></div>
          <div className="heading">No</div>
          <div className="sub_heading">lockin</div>
          <div className="meta">Zeno provides upto 13%* p.a. interest on no lockin period investment.</div>
        </div>
        
      </div>
   
    
  );
}
