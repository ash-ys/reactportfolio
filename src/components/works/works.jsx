import "./works.scss"

export default function works() {
    return (
        <div className="works"  id ="works">
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src="assets/mobile.png" alt="" />
                                </div>
                                <h2>Chat App</h2>
                                <p>Learned Sockets, Rest APIs,
                                     Sending Images,
                                     React Hooks, Props, and CSS
                                     by building and deploying Chat app.
                                    </p>
                                    <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src="assets/resume.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" />
            <img src="assets/arrow.png" className="arrow right" alt="" />
        </div>
    );
}
