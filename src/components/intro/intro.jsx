import "./intro.scss"

export default function intro() {
    return (
        <div className="intro" id = "intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/me.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello there, I'm</h2>
                    <h1>Ashish Wagle</h1>
                    <h3>Freelance <span></span></h3>
                </div>
                <a href="#portfolio"></a>
                <img src="assets/down.png" alt="" />
            </div>
        </div>
    )
}
