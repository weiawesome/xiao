import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.css';
import Home from "./pages/index";
import Bali from "./pages/bali";
import Banchao from "./pages/banchao";
import Cake from "./pages/cake";
import Ferris from "./pages/ferris";
import Forest from "./pages/forest"
import Giaofan from "./pages/giaofan";
import Gioxi from "./pages/gioxi";
import Saosan from "./pages/saosan";
import Shichu from "./pages/shichu";
import Taichung from "./pages/taiching";
import Train from "./pages/train";
const router=createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>
  },
    {
        path:'/Bali',
        element:<Bali></Bali>
    },
    {
        path:'/banchao',
        element:<Banchao></Banchao>
    },
    {
        path:'/cake',
        element:<Cake></Cake>
    },
    {
        path:'/Ferris',
        element:<Ferris></Ferris>
    },
    {
        path:'/forest',
        element:<Forest></Forest>
    },
    {
        path:'/Giaofan',
        element:<Giaofan></Giaofan>
    },
    {
        path:'/Gioxi',
        element:<Gioxi></Gioxi>
    },
    {
        path:'/saosan',
        element:<Saosan></Saosan>
    },
    {
        path:'/Shichu',
        element:<Shichu></Shichu>
    },
    {
        path: '/Taichung',
        element: <Taichung></Taichung>
    },
    {
        path:'/Train',
        element:<Train></Train>
    }

])
function App() {
  return (
      <main>
        <RouterProvider router={router}></RouterProvider>
      </main>
  );
}

export default App;
