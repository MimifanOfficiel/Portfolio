import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/illustration.svg"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import Hello from '../../assets/Hello.gif'



export function Hero() {

	let date:Date = new Date();
	let localDate:Date = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
	const currentTime = localDate.getHours();

	let greeting = "Hello";
	if (currentTime < 18) {
		greeting = "Bonjour";
	} else if (currentTime >= 18 && currentTime < 24) {
		greeting = "Bonsoir";
	}

	console.log(greeting, currentTime)

	const currentYear = new Date().getFullYear();
	const yearsSince2017 = currentYear - 2017;

	return (
		<Container id="home">
			<div className="hero-text">
				<ScrollAnimation animateIn="fadeInUp"> <p>{greeting} <img src={Hello} alt="Hello" width="20px"/>, Je suis</p> </ScrollAnimation>

				<ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}> <h1>Lila BRANDON</h1> </ScrollAnimation>

				<ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}> <h3>Développeuse Full Stack</h3> </ScrollAnimation>

				<ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}> <p className="small-resume">{yearsSince2017} Years of Experience</p> </ScrollAnimation>
				
				<ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>	
					<BrowserRouter>
						<NavHashLink smooth to="#contact" className="button">Me contacter</NavHashLink>
					</BrowserRouter>
				</ScrollAnimation>
				

				<ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
					<div className="social-media">
						<a href="https://www.linkedin.com/in/lila-brandon/" target="_blank" rel="noreferrer">
							<img src={linkedin} alt="Linkedin" />
						</a>
						<a href="https://github.com/MimifanOfficiel/" target="_blank" rel="noreferrer">
							<img src={githubIcon} alt="GitHub" />
						</a>
					</div>
				</ScrollAnimation>
			</div>
			<div className="hero-image">
				<ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
					<img src={Illustration} alt="Illustration" />
				</ScrollAnimation>
			</div>
		</Container>
	)
}