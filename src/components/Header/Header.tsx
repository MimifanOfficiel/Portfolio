import { Container } from './styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState } from 'react'
import Resume from '../../assets/Vinayak_Kumar_Singh_Resume.pdf'

export function Header() {
	const [isActive, setActive] = useState(false)
	function toggleTheme() {
		let html = document.getElementsByTagName('html')[0]
		html.classList.toggle('light')
	}
	function closeMenu() {
		setActive(false)
	}
	return (
		<Container className="header-fixed">
			<Router>
				<HashLink smooth to="#home" className="logo">
					<span>{"<Lila "}</span>
					<span>{" BRANDON/>"}</span>
				</HashLink>
				
				<input onChange={toggleTheme} className="container_toggle" type="checkbox" id="switch" name="mode"/>
				<label htmlFor="switch">Thême</label>

				<nav className={isActive ? 'active' : ''}>
					<NavHashLink smooth to="#home" onClick={closeMenu}> Accueil </NavHashLink>
					<NavHashLink smooth to="#about" onClick={closeMenu}> A propos </NavHashLink>
					<NavHashLink smooth to="#project" onClick={closeMenu}> Projets </NavHashLink>
					<NavHashLink smooth to="#contact" onClick={closeMenu}> Me contacter </NavHashLink>
					<a href={Resume} download className="button"> Mon CV </a>
				</nav>

				<div
					aria-expanded={isActive ? 'true' : 'false'}
					aria-haspopup="true"
					aria-label={isActive ? 'Fermer menu' : 'Ouvrir menu'}
					className={isActive ? 'menu active' : 'menu'}
					onClick={() => { setActive(!isActive) }}
				></div>
			</Router>
		</Container>
	)
}
