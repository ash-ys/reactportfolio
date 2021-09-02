import "./testimonials.scss"

export default function testimonials() {
    return (
        <div className = "testimonials"  id ="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                <div className="card">
                    <div className="top">
                        <img src="assets/right-arrow.png"className="left" alt="" />
                        <img src="assets/bank.svg" className="user" alt="" />
                        <img src="assets/youtube.png" className="right" alt="" />
                    </div>
                    <div className="center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                    <div className="bottom">
                        <h3>Saugat</h3>
                        <h4>CEO of Lalim</h4>
                    </div>
                    </div>       
            </div>
        </div>
    )
}
