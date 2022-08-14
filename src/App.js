import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import AboutInfo from './components/AboutInfo';
import Education from './components/Education';
import Contact from './components/Contact';
import Project from './components/Project';
const App = () => {
  return (
	<div>
		<Navbar/>
		<Routes>
			<Route path="/" element={<Home/>}></Route>
			<Route path="/about" element={<AboutInfo/>}></Route>
			<Route path="/education" element={<Education/>}></Route>
			<Route path="/project" element={<Project/>}></Route>
			<Route path="/contact" element={<Contact/>}></Route>
		</Routes>
	</div>
  )
}

export default App