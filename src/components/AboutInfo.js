import React from 'react'
import Skills from './Skills'
import Resume from '../assets/Resume.pdf'

const AboutInfo = () => {
  return (
	<div>
<section className="about">

<h1 className="heading">About <span>Me</span> </h1>

<div className="row">

	<div className="info-container">

		<h1>Personal Info</h1>

		<div className="box-container">

			<div className="box">
				<h3> <span>Name : </span> Ayush Gaikwad </h3>
				<h3> <span>Age : </span> 20 </h3>
				<h3> <span>Email : </span> ayush.gaikwad07ag@gmail.com </h3>
				<h3> <span>Address : </span> Indore, India </h3>
			</div>

			<div className="box">
				{/* <!-- <h3> <span>freelance : </span> available </h3> --> */}
				<h3> <span>Skill : </span> Front-end </h3>
				<h3> <span>Experience : </span>Fresher </h3>
				<h3> <span>Language : </span> Hindi, English </h3>
			</div>

		</div>

		<a href={Resume} target="_blank" download className="btn"> Download CV <i className="fas fa-download"></i> </a>

	</div>
</div>
</section>
<Skills />
	</div>
  )
}

export default AboutInfo