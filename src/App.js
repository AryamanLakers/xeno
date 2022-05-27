import "./styles.css";
import Navbar from "./components/Navbar.js";
import FirstPage from "./components/FirstPage.js";
import SecondPage from "./components/SecondPage.js";
import ThirdPage from "./components/ThirdPage.js";
import FourthPage from "./components/FourthPage.js";
import FifthPage from "./components/FifthPage.js";
import SixthPage from "./components/SixthPage.js";
import EighthPage from "./components/EighthPage.js";
import SeventhPage from "./components/SeventhPage.js";
import Footer from "./components/Footer.js";

import "./components/navbar.scss";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <FirstPage />
      <EighthPage />
      <ThirdPage />
      <SecondPage />
      <FourthPage />
      <FifthPage />
      <SixthPage />
      <SeventhPage />
      <Footer />
    </div>
  );
}
