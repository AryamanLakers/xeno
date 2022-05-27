import "./SecondPage.scss";
import Button from "./Button.js";
export default function SecondPage() {
  return (
  	<div className="outer_box_new">

   		<div className="first_box">
        <div className="title common">Join us in less than </div>
        <div className="sub_heading common">10 seconds</div>
        <div className="meta common">Xeno provides the smoothest investment tracking
          feature so that you can get all the detailes regarding
          your investment anytime, anywhere!</div>
        <div className="button"></div>
        <div className="common"id="buttons">
            <button>Learn More</button>
        </div>
      </div>


      <div className="second_box">
        <div className="border-gradient-purple border-gradient inner_box">
          <div id="xeno" className="common">Xeno</div>
          <div id="title" className="common">Enter your</div>
          <div id="title2"className="common">Email Address</div>
          <div id="meta"className="common">Please verify your email address to process with the KYC</div>
          <div className="common input1"><input className="common"type="text" Placeholder="yourname@example.com"/ ></div>
          <div className="common"id="buttons">
            <button id="bt11">Back</button>
            <button id="bt22">Next</button>
          </div>
        </div>
      </div>


    </div>
  );
}
