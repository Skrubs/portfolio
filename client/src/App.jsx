import "./App.css";
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./AppRoutes.jsx";
import Home from './components/Home.jsx';




function App() {

  return (
      <div>
          <BrowserRouter>
              <Home/>
            <AppRoutes/>
          </BrowserRouter>
      </div>
  );
}

export default App;
