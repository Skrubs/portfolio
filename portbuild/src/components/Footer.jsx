import "../App.css";

export default function Footer(){

    return(
        <div className="footer">

            <p>&copy; {new Date().getFullYear()} Angelo's Portfolio</p>
        </div>
    );
}