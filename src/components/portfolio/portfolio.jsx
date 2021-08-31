import Portfoliolist from "../portfoliolist/Portfoliolist";
import "./portfolio.scss"

export default function portfolio() {
    const list = [
        {
            id:"featured",
            title:"Featured",
        },
        {
            id:"web",
            title:"Web App",
        },
        {
            id:"mobile",
            title:"Mobile App",
        },
        {
            id:"design",
            title:"Design",
        },
        {
            id:"content",
            title:"Content",
        },
    ];
    return (
        <div className="portfolio" id ="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item)=>(
                    <Portfoliolist title={item.title}/>
                ))}
            </ul>
            <div className="container">
                <div className="item">
                    <img src="assets/Savings.svg" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="assets/Savings.svg" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="assets/Savings.svg" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="assets/Savings.svg" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="assets/Savings.svg" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="assets/Savings.svg" alt="" />
                    <h3>Banking App</h3>
                </div>
            </div>
        </div>
    )
}
