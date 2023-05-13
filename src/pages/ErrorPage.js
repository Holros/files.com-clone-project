import { Link } from "react-router-dom"

function ErrorPage() {
    console.log("ErrorPage.js rendered")
    return (
        <div className="intro" style={{maxWidth:"500px", margin:"auto"}}>
            <h1>Error!, Page not found.</h1>
            <p>You seem to have inputted a wrong url, or the page you are looking for doesn't exist </p>
            <Link to="/" style={{display:"block", backgroundColor:"rgba(22, 58, 63, 0.8)", color:"white", padding:"10px", borderRadius:"10px"}}>Go Back to Home</Link>
        </div>
    )
}
export default ErrorPage