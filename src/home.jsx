import React, { useEffect, useState } from "react";
import "./App.scss";
import { useNavigate } from "react-router-dom";
import { Fade, Reveal, Zoom } from "react-awesome-reveal";
import Typewriter from "typewriter-effect";

const Home = () => {
  const navigate = useNavigate();
  const words = ["Money", "Time", "Stress"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setCurrentWordIndex((prevIndex) =>
  //       prevIndex === words.length - 1 ? 0 : prevIndex + 1
  //     );
  //   }, 2000); // Adjust the time between words

  //   return () => clearTimeout(timer);
  // }, [currentWordIndex]);

  return (
    <>
      <div className="home-filter">
        <div className="middle-home-content">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="big-heading">WE'LL SAVE YOUR</div>
            <Typewriter
              options={{
                strings: ['MONEY', 'TIME', 'STRESS'],
                autoStart: true,
                pauseFor: 1000,
                loop: true,
              }}
            />
          </div>
          <Fade cascade>
            <div style={{ paddingTop: "30px" }} className="small-content">
              EASE MEAL PREP, VARIETY IN CHOICES.
            </div>
            <div style={{ paddingBottom: "40px" }} className="small-content">
              HEALTH TRACKING, COMING SOON.
            </div>
          </Fade>
          <Reveal
            keyframes={[
              { transform: "scale(0.5)", opacity: 0 },
              { transform: "scale(1)", opacity: 1 },
            ]}
            duration={1000}
            triggerOnce
          >
            <Zoom>
              <button onClick={() => navigate("/who-we-are")}>CONTACT</button>
            </Zoom>
          </Reveal>
        </div>
      </div>
    </>
  );
};

export default Home;
