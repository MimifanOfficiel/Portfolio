import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){
	
	return(
		<Container id="contact">
			<header>
				<h2>Me contacter</h2>
				<p>Vous souhaitez commencer un projet ? </p>
				<p>Contactez moi pour faire un devis.</p>
			</header>
			<div className="contacts">
				<div>
					<a href="mailto:contact@lilabrandon.fr"><img src={emailIcon} alt="Email" /></a> 
					<a href="mailto:contact@lilabrandon.fr">contact@lilabrandon.fr</a>
				</div>
				<div>
					<a href="tel:+919630576848"><img src={phoneIcon} alt="Phone No" /></a>
					<a href="tel:+919630576848">(+33) 00 00 00 00 00</a>
				</div>  
			</div>
			<Form></Form>
		</Container>
	)
}