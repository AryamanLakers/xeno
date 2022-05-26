import "./FirstPage.scss";
import Button from "./Button.js";
export default function FirstPage() {
  return (
    <div className="outer_first_page">
      <div className="first_page">
        <div className="heading">For those who like to watch their wealth</div>
        <div className="multiply">multiply</div>
        <div className="sub_heading">Join Xeno today to earn upto 15* p.a</div>
        <div className="invest_button">
          <Button />
        </div>
      </div>
    </div>
    
  );
}
