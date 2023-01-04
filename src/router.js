import React from 'react'
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import CreateStudent from "./pages/CreateStudent";
import EditStudentPage from './pages/EditStudent';
import Contact from "./pages/Contact";
import NoPages from './pages/NoPages';

export default function Router({students}) {
 
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home students={students } />} />
          <Route path="createStudent" element={<CreateStudent />} />
          <Route path={`editStudent/:id/:names/:emails/:dobs`} element={<EditStudentPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPages />} />
        </Route>
      </Routes>
  )
}
