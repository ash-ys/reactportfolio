import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import "./app.scss"
function App() {
  return (
    <div className="app">
      <Topbar/>
     <div className="sections">
     </div>
       <Intro/>
       <Portfolio/>
       <Works/>
       <Testimonials/>
       <Contact/>
    </div>
  );
}

export default App;
