
import './App.css'
import PrimarySearchAppBar from "./components/PrimarySearchAppBar.jsx";
import Footer from "./components/Footer.jsx";



function App() {


  return (
   <>
        <div style={{flex: '1', justifyContent: 'center', alignItems: 'center', marginLeft: '30%', marginTop: '0'}}>
            <paper elevation={12}>
                <PrimarySearchAppBar/>
            </paper>
        </div>
       <Footer/>
   </>
  )
}

export default App
