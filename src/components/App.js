import Navtop from "./Navtop";
import Home from "./Home";
import Contact from "./Contact";
import Products from "./Products";
import About from "./About";

import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route } from "react-router-dom";

const sentences = ["TOP QUALITY MUSICAL INSTRUMENT STORE", "CHEAP SHIPPING FEES", "VARIOUS OF INSTRUMENTS"];
const defaultProps = {
  center: {
    lat: -3.4651371014864703, // default latitude
    lng: 102.52496986899469, // default longitude
  },
  zoom: 150,
};
function App() {
  return (
    <div style={{ height: "fit-content", overflowX: "hidden" }}>
      <Navtop sentence={sentences} colorDark="rgb(37, 21, 4)" colorBright="white" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contacts" element={<Contact center={defaultProps.center} zoom={defaultProps.zoom} />} />
        <Route path="/Products" element={<Products />} />
      </Routes>

      <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

      <script src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js" crossorigin></script>

      <script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>

      <script>var Alert = ReactBootstrap.Alert;</script>
    </div>
  );
}

export default App;
