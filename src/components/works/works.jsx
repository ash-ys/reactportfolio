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
                                <h2>Title</h2>
                                <p>Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Maiores et nisi 
                                    qui magni inventore aliquid hic vel
                                    perferendis quia quisquam laboriosam,
                                    esse pariatur eos placeat ullam
                                    minus incidunt voluptatum laborum.
                                    </p>
                                    <span>Projects</span>
                            </div>
                        </div>
                        <div className="right"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
