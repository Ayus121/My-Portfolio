import React from 'react'
import Profile from '../assets/images/p1.png'
const Banner = () => {
  return (
	<div>
		<section className="home">

<div className="image">
	<img src={Profile} alt="" /> 
</div>

<div className="content">
	<h3>Hi, I am Ayush Gaikwad</h3>
	<span>Front-end Developer</span>
	<p>As an individual I am a front-end developer with high potential of credibility, imagination, time
		management, leadership qualities.Always has the zeal to learn and grow. I would appreciate the opportunity to show you how I can
		help your company meet its goals.</p>
</div>

</section>
	</div>
  )
}

export default Banner