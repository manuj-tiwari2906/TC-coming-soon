import "./App.scss";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Home from "./home";
import WhoAreWe from "./who-are-we";
import Navbar from "./navbar";
import { useLocation } from 'react-router-dom';

function App() {

  const location = useLocation();
  return (
    <>
        <div style={{ backgroundImage: location.pathname.includes('who-we-are') ? 'unset' : 'url("../src/assets/home-bg.jpeg")' }} className="App">
          <div className="navbars">
            <Navbar />
          </div>
          <div className="middle-content">
            <div style={{ height: "100%" }} className="routes">
              <Routes>
                <Route path="/" element={<Outlet />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/who-we-are" element={<WhoAreWe />} />
                </Route>
              </Routes>
            </div>
          </div>
          {location.pathname.includes('who-we-are') && <div className="footer">
          © 2024 website copyrights
          </div>}
        </div>
    </>
  );
}

export default App;
