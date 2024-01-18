import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function ScrollToTop() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const { pathname } = useLocation();

  useEffect(() => {
    windowDimensions.width >= 630 ? (window.scrollY === 88 ? window.scrollTo(0, 88) : window.scrollTo(0, 89)) : window.scrollY === 0 ? window.scrollTo(0, 0) : window.scrollTo(0, 1);
  }, [pathname, windowDimensions]);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return null;
}

export default ScrollToTop;
