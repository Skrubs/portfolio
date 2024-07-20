import {Route, Routes} from "react-router-dom";
import Home from './components/Home';
import Gallery from "./components/Gallery.jsx";
import RegisterPage from "./components/RegisterPage.jsx";
import VerifiedUserHome from "./components/VerifiedUserHome.jsx";
import VerifiedUserSettings from "./components/VerifiedUserSettings.jsx";



const AppRoutes = ()=>{
    return(
        <Routes>
            <Route index element={<Home/>}/>
            <Route path='/Gallery' element={<Gallery/>}/>
            <Route path='/RegisterPage' element={<RegisterPage/>}/>
            <Route path='/VerifiedUserHome' element={<VerifiedUserHome/>}/>
            <Route path='/VerifiedUserSettings' element={<VerifiedUserSettings/>}/>
        </Routes>
    );
}
export default AppRoutes