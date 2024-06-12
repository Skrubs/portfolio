
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import PrimarySearchAppBar from "./components/Appbar.jsx";
import BasicGrid from "./components/GridContainer.jsx"
import Footer from "./components/Footer.jsx";
import Navigationbar from "./components/Navigationbar.jsx";

function App() {


  return (
    <>
        <div style={{
            backgroundColor: "black",
            padding: "10px",
            marginLeft: "2em",
            marginRight: "2em",
            borderRadius: "20px",

        }}><PrimarySearchAppBar/></div>
        <div style={{
            backgroundColor: "gray",
            borderRadius: "5px",
            border: "solid",
            borderWidth: "2px",
            width: " 20% ",
        }}>
            <Navigationbar/>

        </div>
        <BasicGrid name={'Angelo'}/>
        <Footer/>

    </>
  )
}

export default App
