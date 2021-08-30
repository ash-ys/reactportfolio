import "./topbar.scss"
import {Face, Mail} from "@material-ui/icons"
export default function topbar() {
    return (
        <div className = "topbar">
            <div className="wrapper">
                <div className="left">
                 <a href="#intro" className="logo">genius. </a>
                 <div className="itemContainer">
                     <Face className="icon"/>
                     <span>+977 9860500</span>

                 </div>
                 <div className="itemContainer">
                     <Mail className="icon"/>
                     <span>Awagle7@mail.com</span>

                 </div>
                </div>
          
                <div className="right">

                </div>
            </div>
        </div>
    )
}
