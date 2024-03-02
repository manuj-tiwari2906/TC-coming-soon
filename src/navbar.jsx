import React, { useEffect } from "react";
import { GreenLogo, WhiteLogo } from "./assets";
import "./App.scss";
import gsap from "gsap";
import { useLocation, useNavigate } from "react-router-dom";
import { Flip } from "react-awesome-reveal";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const icon = document.querySelector(".floating-icon");

    function floatIcon() {
      const duration = 2; // Set a constant duration for smoother motion
      const yValue = 8; // Adjust the distance of the float

      gsap.to(icon, {
        y: yValue,
        duration: duration,
        ease: "power1.inOut",
        onUpdate: () => {
          if (gsap.getProperty(icon, "y") === yValue) {
            // Trigger the second tween only when the first one is complete
            gsap.to(icon, {
              y: -yValue,
              duration: duration,
              ease: "power1.inOut",
              onComplete: floatIcon,
            });
          }
        },
      });
    }

    floatIcon();
  }, []);

  return (
    <div
      style={{
        color: location.pathname.includes("/who-we-are") ? "#084908" : "#fff",
        boxShadow: location.pathname.includes("/who-we-are")
          ? "0px 4px 4px 0px #9696964D"
          : "unset",
      }}
      className="header-navbar"
    >
      <img
        className="floating-icon"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
        src={location.pathname.includes("/who-we-are") ? GreenLogo : WhiteLogo}
      />
      <Flip style={{ zIndex: 99 }}>
        <div
          onClick={() => navigate("/who-we-are")}
          style={{}}
          className="who-text"
        >
          WHO ARE WE ?
        </div>
      </Flip>
    </div>
  );
};

export default Navbar;
