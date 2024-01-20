import "./App.css";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import Productpage from "./Screens/Productpage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Screens/Home";
import Contactus from "./Screens/ContactUsPage";
import AboutUsPage from "./Screens/About";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/about" element = {<AboutUsPage/>} />
          <Route path="/contactus" element = {<Contactus/>} />
          <Route path="/food" element = {<Productpage/>} />
          <Route path="/login" element = {<Login/>} />
          <Route path="/signup" element = {<Signup/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
