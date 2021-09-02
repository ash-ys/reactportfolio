import "./contact.scss"

export default function contact() {

    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    return (
        <div className = "contact" id ="contact">
            <div className="left">
                <img src = "assets/shake.svg" alt =""/>
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type ="text" placeholder ="Email"/>
                    <textarea placeholder="message"></textarea>
                    <button  type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}
