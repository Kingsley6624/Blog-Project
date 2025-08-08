import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import React from 'react';



import Rootlayout from './componenet/Layout/Rootlayout';
import Contactus from './componenet/Pages/Contactus';
import About from './componenet/Pages/About';
import Blog from './componenet/Pages/Blog';
import Home from './componenet/Pages/Home'
import Notfoundpage from './componenet/Pages/Notfoundpage';
import SingleBlog from './componenet/Pages/SingleBlog';
import Bloglayout from './componenet/Layout/Bloglayout';




function App() {
 const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Rootlayout />}>
      <Route index element={<Home />} />

      <Route path='blog' element={<Bloglayout />}> 
      <Route index element={<Blog />} />
      <Route path=':id' element={<SingleBlog />} />
      </Route>

      <Route path='about' element={<About />} />

      <Route path='contact' element={<Contactus />} />
      
      {/* Add more routes as needed */}
      <Route path='*' element={<Notfoundpage />} />
    </Route>
  )
 )
  return (
    <div>
<RouterProvider router={router} />
    </div>
  );
}

export default App;
