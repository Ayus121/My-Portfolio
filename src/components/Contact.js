import React from 'react'

const Contact = () => {
	let gitHub ="https://github.com/Ayus121";
	let twitter="https://twitter.com/AyushGa84622467?t=AoSGIUxwuWehIFEo5du9dQ&s=09";
	let linkedIn="https://www.linkedin.com/in/ayush-gaikwad-690846219/";
  return (
	<div>
		<section className="contact">

<h1 className="heading"> contact <span>me</span> </h1>

<div className="row">

    <div className="info-container">

        <div className="box-container">

            <div className="box">
                <i className="fas fa-map"></i>
                <div className="info">
                    <h3>Address :</h3>
                    <p>Indore, India</p>
                </div>
            </div>

            <div className="box">
                <i className="fas fa-envelope"></i>
                <div className="info">
                    <h3>Email :</h3>
                    <p>ayush.gaikwad07ag@gmail.com</p>
                </div>
            </div>

            <div className="box">
                <i className="fas fa-phone"></i>
                <div className="info">
                    <h3>Number :</h3>
                    <p>+91 7000126762</p>
                </div>
            </div>

            <div className="share">
                <a href={gitHub} className="fab fa-github" target="_blank" rel="noreferrer"></a>
                <a href={twitter} className="fab fa-twitter" target="_blank" rel="noreferrer"></a>
                <a href={linkedIn} className="fab fa-linkedin" target="_blank" rel="noreferrer"></a>
            </div>
        </div>


    </div>

</div>

</section>

	</div>
  )
}

export default Contact