import "./EighthPage.scss";
import {useState,useEffect} from "react"
import Button from "./Button.js";
import Slider from '@mui/material/Slider';
export default function EighthPage() {

    const [currentValue, setCurrent]= useState(30)
    const [currentPeriod, setCurrentPeriod]= useState(6)
    function valuetext(value: number) {
      setCurrent(value);
    }
    function periodValue(value: number) {
      setCurrentPeriod(value);
    }
    function useWindowDimensions() {

      const hasWindow = typeof window !== 'undefined';

      function getWindowDimensions() {
        const width = hasWindow ? window.innerWidth : null;
        const height = hasWindow ? window.innerHeight : null;
        return {
          width,
          height,
        };
      }

      const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

      useEffect(() => {
        if (hasWindow) {
          function handleResize() {
            setWindowDimensions(getWindowDimensions());
          }

          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        }
      }, [hasWindow]);

      return windowDimensions;
    }
  const { height, width } = useWindowDimensions();
  return (
  	<div className="page-8">
   		 <div className="heading">Invest & earn up to 15%* on USDT</div>
       <div className="withdraw">Withdraw anytime</div>
       <div className="content">
          <div className="slider">
            <div className="slider-start ">
              <div className="meta">Select the time period</div>
              <div className="period_slider">
                  <Slider
                      defaultValue={6}
                      getAriaValueText={periodValue}
                      valueLabelDisplay="auto"
                      min={0}
                      max={12}
                      step={6}
                      sx={{
                        width: width<720?150:(0.1*height+0.1*width)*1.5,
                        color: '#8829c6',
                        '& .MuiSlider-thumb': {
                          borderRadius: '1px',
                        },
                      }}
                    />
              </div> 
              <div className="slider_amount_meta">Slide to select the amount</div>
              <div className="actual_slider">
                  <Slider
                      defaultValue={30}
                      getAriaValueText={valuetext}
                      valueLabelDisplay="auto"
                      min={0}
                      max={10000000000000}
                      sx={{
                        width: width<720?150:(0.1*height+0.1*width)*1.5,
                        color: '#d51983',
                        '& .MuiSlider-thumb': {
                          borderRadius: '1px',
                        },
                      }}
                    />
              </div> 
              <div className="buttons2">
                <button className="bt1">Add Money</button>
                <button className="bt2">View Breakdown</button>
              </div>    
            </div>
          </div>
          <div className="box">
            <div className="box1 border-gradient border-gradient-purple">
              <div className="common title">Earn @15% p.a.</div>
              <div className="common usd"></div>
              <div className="common add">Add</div>
              <div className="common amount">2000</div>
              <div className="common toearn">to earn</div>
              <div className="common toearn_amount">+₹300</div>
            </div>
          </div>
       </div>
    </div>
    
  );
}
