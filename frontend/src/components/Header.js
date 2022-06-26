import React from 'react';
//import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';



function Header() {
	/*const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;
	const dispatch = useDispatch()
	const logoutHandler = () => {
		dispatch(logout())
	}*/


	return (
		<header>
			<Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
				<Container>
					<LinkContainer to="/">
						<Navbar.Brand> FiberDoc </Navbar.Brand>
					</LinkContainer>

					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
						<LinkContainer to="/screen2">
								<Nav.Link>
								Screen2
								</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/screen3">
								<Nav.Link>
									Screen3
								</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
}

export default Header;
