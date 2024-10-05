import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import Home from "./Pages/Home";
import Cities from "./Pages/Cities";
import NotFound from "./Pages/NotFound";
import StandardLayaout from './Layouts/StandardLayaout';


const router = createBrowserRouter([ //Es el array de rutas
  {
    element: <StandardLayaout></StandardLayaout>,
    children: [{ path: "/", element: <Home></Home> },
    { path: "/home", element: <Home></Home> },]
  },

  { path: "/cities", element: <Cities></Cities> },
  { path: "/*", element: <NotFound></NotFound> },



]);

function App() {



  return (

    <>
      <RouterProvider router={router}></RouterProvider>

    </>
  );
}



//Rutas
// comunicacion entre componentes: 1:11 Video 



export default App
