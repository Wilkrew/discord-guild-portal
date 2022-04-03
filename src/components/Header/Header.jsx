import { Container, Nav, Navbar } from "react-bootstrap";

function Header() {
	return (
		<Navbar bg="light" variant="light">
			<Container>
				<Navbar.Brand href="#home">
					<img
						alt="logo"
						src="https://cdn.discordapp.com/attachments/938854460455796758/944669170451218473/Eden_Banner.png"
						style={{ width: "150px" }}
					/>
				</Navbar.Brand>
				<Nav>
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/features">Features</Nav.Link>
					<Nav.Link href="/pricing">Pricing</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
}

export default Header;
