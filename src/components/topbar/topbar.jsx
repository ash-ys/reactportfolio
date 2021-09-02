
import "./topbar.scss"
import {Face, Mail} from "@material-ui/icons"
export default function topbar({menuOpen, setMenuOpen}) {
    return (
        <div className = {"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                 <a href="#intro" className="logo">Intro </a>
                 <div className="itemContainer">
                     <Face className="icon"/>
                     <span>+977 9860500185</span>

                 </div>
                 <div className="itemContainer">
                     <Mail className="icon"/>
                     <span>Awagle4@gmail.com</span>

                 </div>
                </div>
          
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>

                </div>
            </div>
        </div>
    )
}
