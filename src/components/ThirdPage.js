import "./ThirdPage.scss";
import Button from "./Button.js";
export default function ThirdPage() {
  return (
  	<div className="outer_box1">
   		 <div className="first_box">
          <div className="mobile border-gradient-purple border-gradient ">
            <div id="xeno" className="common">Xeno</div>
            <div id="title" className="common">Please enter your</div>
            <div id="title2"className="common">OTP</div>
            <div id="meta"className="common">4-digit OTP has been sent to your mobile number</div>
            <div className="common input1">
              <div className="otp_input"></div>
              <div className="otp_input"></div>
              <div className="otp_input"></div>
              <div className="otp_input"></div>
            </div>
            <div className="common resend"><a href="/">Resend OTP</a></div>
            <div className="outer_buttons_box">
              <div className="common"id="buttons1">
                <button id="btn1-1">Back</button>
                <button id="btn2-1">Next</button>
              </div>
            </div>
          </div>
       </div>
       <div className="second_box1">
            <div id="title" className="common">Better than a </div>
            <div id="title2"className="common">Bank</div>
            <div id="meta"className="common">Xeno provides the smoothest investment tracking
              feature so that you can get all the detailes regarding
              your investment anytime, anywhere!
            </div>
            <div className="common"id="buttons">
              <button>Back</button>
            </div>
       </div>
    </div>
    
  );
}
