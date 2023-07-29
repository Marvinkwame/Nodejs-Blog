import { useState } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import SinglePost from './pages/SinglePost';
import ProfilePage from './pages/ProfilePage';
import CreatePost from './pages/CreatePost';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path='/post/:id' element={<SinglePost />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path='/createpost' element={<CreatePost />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />
}

export default App
