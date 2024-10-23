import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import Home from "./Pages/Home";
import Cities from "./Pages/Cities";
import Details from './Pages/details';
import NotFound from "./Pages/NotFound";
import StandardLayaout from './Layouts/StandardLayaout';
import DetailsLayout from './Layouts/DetailsLayaout';



const router = createBrowserRouter([
  {
    element: <StandardLayaout></StandardLayaout>,
    children: [{ path: "/", element: <Home></Home> },
    { path: "/home", element: <Home></Home> },]
  },
  {
    element: <DetailsLayout></DetailsLayout>,
    children: [
      { path: "/details/:name", element: <Details></Details> },

    ]
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







export default App
