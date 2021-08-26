import "./topbar.scss"
import {Face, Mail} from "@material-ui"

export default function topbar() {
    return (
        <div className = "topbar">
            <div className="wrapper">
                <div className="left">
                 <a href="#intro" className="logo">genius. </a>
                 <div className="itemContainer">
                     <Face/>
                     <span>+977 9860500</span>

                 </div>
                 <div className="itemContainer">
                     <Mail/>
                     <span>Awagle7@mail.com</span>

                 </div>
                </div>
          
                <div className="right">

                </div>
            </div>
        </div>
    )
}
