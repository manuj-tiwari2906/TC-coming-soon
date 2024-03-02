import React from "react";
import {
  BudgetFriendly,
  IngredientImg,
  LessTime,
  MealKit,
  NoHassle,
} from "./assets";
import { Reveal, Fade, Slide, Flip } from "react-awesome-reveal";

const WhoAreWe = () => {
  return (
    <div className="who-container">
      <div className="gradient-div"></div>
      <div className="upper-section">
        <div className="text-section">
          <Slide left>
            <div style={{ paddingBottom: "40px" }} className="head">
              TING TONG!
            </div>
          </Slide>
          <Fade>
            <div className="head-2">
              <div className="head">
                Hi, IT'S US, <span style={{ fontWeight: 800 }}>TC FRESH</span>{" "}
                AT
              </div>
              <div className="head">YOUR SERVICE</div>
              <div className="head">WITH YOUR MEAL READY!</div>
            </div>
          </Fade>
        </div>
      </div>
      <div className="lower-and-divider">
        <div className="mid-section">
          <Fade style={{ width: '24%' }}>
            <div className="properties-with-icon">
              <img src={BudgetFriendly} />
              <div className="properties">Budget Friendly</div>
            </div>
          </Fade>
          <Fade style={{ width: '24%' }}>
          <div className="properties-with-icon">
            <img src={LessTime} />
            <div className="properties">Less Time</div>
          </div>
          </Fade>
          <Fade style={{ width: '24%' }}>
          <div className="properties-with-icon">
            <img src={NoHassle} />
            <div className="properties">No Stress/Hassle</div>
          </div>
          </Fade>
        </div>
        <div className="divider"></div>
        <div className="lower-section">
          <div className="left-text">
            <div className="big-text">Who are We?</div>
            <div className="small-text">
              <Slide left>
              <span>At TC Fresh, we are more than just a meal kit delivery service. We
              are here to make your life easier and healthier.</span>
              </Slide>
             <br /> <br /><br /> 
             <Slide left>
             <span>Our mission is simple: to bring healthy and hygienic
              cooking to every home. With our weekly plan options, you can
              easily incorporate nutritious meals into your busy schedule. Our
              chef-designed recipes will not only fuel your body but also
              delight your taste buds.</span>
             </Slide>
               <br /> <br /> <br /> 
             <Slide left>
             <span>With TC Fresh, you
              can say goodbye to the stress of meal planning and grocery
              shopping. Simply place your order, and we'll take care of the
              rest. We are committed to saving your time, reducing your stress
              levels, and helping you save money in the process.</span>
             </Slide>
            </div>
          </div>
          <div className="img-section">
          <img src={MealKit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
