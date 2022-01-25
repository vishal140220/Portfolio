import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import Twitter from "../../img/twitter.png";
import Linkedin from "../../img/linkedin.png";
import { FaFacebookSquare } from "react-icons/fa";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
	const formRef = useRef();
	const [done, setDone] = useState(false);
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	const handleSubmit = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"gmail",
				"template_16nx1z9",
				e.target,
				"user_uoBxFy72LGprIhNDviMg5"
			)
			.then(
				(result) => {
					console.log(result.text);
					setDone(true);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	};

	return (
		<div className="c">
			<div className="c-bg"></div>
			<div className="c-wrapper">
				<div className="c-left">
					<h1 className="c-title">Let's discuss your project</h1>
					<div className="c-info">
						<div className="c-info-item">
							<a
								href="https://api.whatsapp.com/send?phone=917598403369&text=Hello%20Vishal"
								target="_blank"
							>
								<img src={Phone} alt="" className="c-icon" />
							</a>
							<div className="c-info-desc">+91 7598403369</div>
						</div>
						<div className="c-info-item">
							<a href="mailto:p.vishal140220@gmail.com" target="_blank">
								<img className="c-icon" src={Email} alt="" />
							</a>
							<div className="c-info-desc">p.vishal140220@gmail.com</div>
						</div>
						<div className="c-info-item">
							<a href="https://goo.gl/maps/rnRrYEyDeRkm9t2u7" target="_blank">
								<img className="c-icon" src={Address} alt="" />
							</a>
							<div className="c-info-desc">Coimbatore, Tamil Nadu.</div>
						</div>
						<div className="c-info-item">
							<a href="https://twitter.com/_iamvishal__" target="_blank">
								<img className="c-icon" src={Twitter} alt="" />
							</a>
							<div className="c-info-desc">Click here to see my tweets!</div>
						</div>
						<div className="c-info-item">
							<a href="https://www.facebook.com/vishal140220" target="_blank">
								<FaFacebookSquare className="c-icon" />
							</a>
							<div className="c-info-desc">Click here to see my FB posts!</div>
						</div>
						<div className="c-info-item">
							<a
								href="https://www.linkedin.com/in/vishal-p-6296061a6/"
								target="_blank"
							>
								<img className="c-icon" src={Linkedin} alt="" />
							</a>
							<div className="c-info-desc">Connect with me professionally!</div>
						</div>
					</div>
				</div>
				<div className="c-right">
					<p className="c-desc">
						<b>What’s up?</b> Get in touch with me.
					</p>
					<form ref={formRef} onSubmit={handleSubmit}>
						<input
							style={{ backgroundColor: darkMode && "#b4b8b6" }}
							type="text"
							placeholder="Name"
							name="user_name"
						/>
						<input
							style={{ backgroundColor: darkMode && "#b4b8b6" }}
							type="text"
							placeholder="Subject"
							name="user_subject"
						/>
						<input
							style={{ backgroundColor: darkMode && "#b4b8b6" }}
							type="text"
							placeholder="Email"
							name="user_email"
						/>
						<textarea
							style={{ backgroundColor: darkMode && "#b4b8b6" }}
							rows="5"
							placeholder="Message"
							name="message"
						/>
						<button>Submit</button>
						{done && "Thank you..."}
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
