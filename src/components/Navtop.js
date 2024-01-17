import "./../Navtop.css";
import Navmain from "./Navmain";

import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { LogoWhatsapp, Location, LogoInstagram, Mail } from "react-ionicons";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function Navtop(props) {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  // Cart count
  const [count, setCount] = useState(0);
  const [divStyle, setDivStyle] = useState({ position: "sticky", top: "0", backgroundColor: "transparent" });
  const [color, setColor] = useState({ color: props.colorBright });
  const [ccolor, setCcolor] = useState(props.colorBright);

  const path = useLocation().pathname;

  const stickyNavHandlerHome = (e) => {
    if (window.scrollY >= 150) {
      setDivStyle({ position: "fixed", top: "0", backgroundColor: "white", boxShadow: `0 0 0 .2px ${props.colorDark}` });
      setColor({ color: props.colorDark });
      setCcolor(props.colorDark);
    } else if (window.scrollY > 88 && window.scrollY < 150) {
      setDivStyle({ position: "fixed", top: "0", backgroundColor: "transparent" });
      windowDimensions.width >= 992 ? setColor({ color: props.colorBright }) : setColor({ color: props.colorDark });
      setCcolor(props.colorBright);
    } else windowDimensions.width >= 630 ? setDivStyle({ position: "sticky", top: "0", backgroundColor: "transparent" }) : setDivStyle({ position: "fixed", top: "0", backgroundColor: "transparent" });
  };

  const stickyNavHandler = (e) => {
    if (window.scrollY > 88) {
      setDivStyle({ position: "fixed", top: "0", boxShadow: `0 0 0 .2px ${props.colorDark}`, backgroundColor: "white" });
    } else
      windowDimensions.width >= 630
        ? setDivStyle({ position: "sticky", top: "0", backgroundColor: "white", boxShadow: `0 0 0 .2px ${props.colorDark}` })
        : setDivStyle({ position: "fixed", top: "0", backgroundColor: "white", boxShadow: `0 0 0 .2px ${props.colorDark}` });
  };

  // Always use useEffect when dealing with window event, don't forget to remove the event right away once we add to avoid memory overflowing
  useEffect(() => {
    if (path === "/react-instrument-store") {
      setDivStyle({ position: "sticky", top: "0", backgroundColor: "transparent", boxShadow: `0 0 0 .2px ${props.colorDark}` });
      windowDimensions.width >= 992 ? setColor({ color: props.colorBright }) : setColor({ color: props.colorDark });
      windowDimensions.width >= 992 ? setCcolor(props.colorBright) : setCcolor(props.colorDark);
    } else {
      setDivStyle({ position: "sticky", top: "0", backgroundColor: "white", boxShadow: `0 0 0 .2px ${props.colorDark}` });
      setColor({ color: props.colorDark });
      setCcolor(props.colorDark);
    }
  }, [path, props.colorDark, props.colorBright]);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    if (path === "/react-instrument-store" || path === "/react-instrument-store/About") {
      window.addEventListener("resize", handleResize);
      window.addEventListener("scroll", stickyNavHandlerHome);
      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("scroll", stickyNavHandlerHome);
      };
    } else {
      window.addEventListener("resize", handleResize);
      window.addEventListener("scroll", stickyNavHandler);
      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("scroll", stickyNavHandler);
      };
    }
  });

  return (
    <header className="outerNav">
      <div className="innerNav">
        {windowDimensions.width >= 630 ? (
          <section className="nav1" style={{ width: "100%" }}>
            <div className="m-auto py-1" style={{ width: "fit-content" }}>
              <ul className="nav py-2 m-auto" style={{ width: "100%" }}>
                {props.sentence.map((f) => (f === props.sentence[props.sentence.length - 1] ? <li className="nav-item-1 m-auto px-2">{f}</li> : <li className="nav-item-1 nav-item-border m-auto px-2">{f}</li>))}
              </ul>
            </div>
          </section>
        ) : (
          <></>
        )}
        {windowDimensions.width >= 630 ? (
          <section className="nav2" style={{ width: "100%" }}>
            <div className="m-auto py-1 row justify-content-center" style={{ width: "80%" }}>
              <ul className="nav py-2 col col-10" style={{ width: "fit-content" }}>
                <li className="nav-item-2 nav-item-border mx-3">
                  <a href="#a">
                    <LogoWhatsapp color={"#000"} onClick={() => alert("Hi!")} />
                    {windowDimensions.width >= 992 && <span> Whatsapp +6285264104038</span>}
                  </a>
                </li>
                <li className="nav-item-2 nav-item-border mx-3">
                  <a href="#a">
                    <LogoInstagram color={"#000"} onClick={() => alert("Hi!")} />
                    {windowDimensions.width >= 992 && <span> @yazidanehakim</span>}
                  </a>
                </li>
                <li className="nav-item-2 nav-item-border mx-3">
                  <a href="#a">
                    <Mail color={"#000"} onClick={() => alert("Hi!")} />
                    {windowDimensions.width >= 992 && <span> zidanehakimgt@gmail.com</span>}
                  </a>
                </li>
                <li className="nav-item-2 nav-item-border mx-3">
                  <a href="#a">
                    <Location color={"#000"} onClick={() => alert("Hi!")} />
                    {windowDimensions.width >= 992 && <span> Our Location</span>}
                  </a>
                </li>
              </ul>
            </div>
          </section>
        ) : (
          <></>
        )}
      </div>
      <Navmain color={color} divStyle={divStyle} ccolor={ccolor} count={count} />
    </header>
  );
}

export default Navtop;
