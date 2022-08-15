import React from 'react'
import LMS from '../assets/images/lms.jpg'
import Fitness from '../assets/images/fitness.jpg'
import Restrau from '../assets/images/restrau.jpg'

const Project = () => {
	let gitHub = " https://github.com/Ayus121";
  return (
	<div>
		<section className="project">

<h1 className="heading"> <span>My</span> Projects </h1>

<div className="box-container">

	<div className="box box animate__animated animate__fadeInLeft animate__delay-1s	1s">
		<img src={LMS} alt="" />
		<div className="content">
			<h3>Learning System</h3>
			<p>Learning System was built for the institute to maintain its records</p>
			<a href={gitHub} target="_blank" rel="noreferrer">Source Code</a>
		</div>
	</div>

	<div className="box animate__animated animate__fadeIn animate__delay-2s	2s ">
		<img src={Fitness} alt="" />
		<div className="content">
			<h3>Fitness App</h3>
			<p>Fitness App was built to get to know about exercises and tutorials</p>
			<a href={gitHub} target="_blank" rel="noreferrer">Source Code</a>
		</div>
	</div>
   
	<div className="box box box animate__animated animate__fadeInRight animate__delay-1s	1s">
		<img src={Restrau} alt="" />
		<div className="content">
			<h3>Restaurant's Website</h3>
			<p>Restaurant's Website was built for learning purpose</p>
			<a href={gitHub} target="_blank" rel="noreferrer">Source Code</a>
		</div>
	</div>

	

</div>

</section>
	</div>
  )
}

export default Project