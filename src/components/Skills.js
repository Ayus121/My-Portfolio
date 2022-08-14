import React from 'react'
import icon1 from '../assets/images/icon-1.png'
import icon2 from '../assets/images/icon-2.png'
import icon3 from '../assets/images/icon-3.png'
import java from '../assets/images/java.png'
import react from '../assets/images/react.png'
import tailwind from '../assets/images/tailwind.png'

const Skills = () => {
  return (
	<div>
		<section className="skills">

<h1 className="heading"> <span>My</span> Skills </h1>

<div className="box-container">
	<div className="box">
		<img src={icon1} alt="html" />
		<h3>HTML</h3>
	</div>
	<div className="box">
		<img src={icon2} alt="css" />
		<h3>CSS</h3>
	</div>
	<div className="box">
		<img src={icon3} alt="js" />
		<h3>JavaScript</h3>
	</div>
	<div className="box">
		<img src={java} alt="java" />
		<h3>Java</h3>
	</div>
	<div className="box">
		<img src={tailwind} alt="tailwind" />
		<h3>Tailwind CSS</h3>
	</div>
	<div className="box">
		<img src={react} alt="react" />
		<h3>React.JS</h3>
	</div>
	
</div>

</section>
	</div>
  )
}

export default Skills