import {RouterProvider,} from "react-router-dom";
import './App.css'
import routes from "./Component/Router/routes/routes";
import {HelmetProvider } from 'react-helmet-async';

function App() {
return(

    <HelmetProvider>
       <RouterProvider router={routes} />
    </HelmetProvider>
   
)
}

export default App
