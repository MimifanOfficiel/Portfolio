import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'

export function Footer() {
	return (
		<Container className="footer">
			<a href="https://vinayaksingh.in" className="logo">
				<span>www.lila</span>
				<span>brandon.fr</span>
			</a>
			<div>
				<p>
					Ce portfolio a été fait en React <img src={reactIcon} alt="React" />
					{/* <span>❤️</span> */}
				</p>
			</div>

			<div className="social-media">

				<a href="https://www.linkedin.com/in/lila-brandon/" target="_blank" rel="noreferrer">
					<img src={linkedin} alt="Linkedin" />
				</a>

				<a href="https://github.com/MimifanOfficiel/" target="_blank" rel="noreferrer">
					<img src={githubIcon} alt="GitHub" />
				</a>
			
			</div>
		</Container>
	)
}
