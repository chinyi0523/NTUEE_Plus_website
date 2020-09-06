import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Logo from './Logo'
import './AppBar.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavBar = () => {
	return (
		//=========================Bootstrap React =============================
		<Navbar bg='light' expand='lg'>
			<Navbar.Brand href='/'>
				<Logo />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav>
					<Button id='AppBar_menuButton' className='noHoverBg'>
						<NavDropdown title='ABOUT' id='basic-nav-dropdown'>
							<NavDropdown.Item href='/About'>
								<Button id='AppBar_menuButton' className='noHoverBg'>
									About
								</Button>
							</NavDropdown.Item>
							<NavDropdown.Item href='/History'>
								<Button id='AppBar_menuButton' className='noHoverBg'>
									History
								</Button>
							</NavDropdown.Item>
							<NavDropdown.Item href='/Team'>
								<Button id='AppBar_menuButton' className='noHoverBg'>
									Team
								</Button>
							</NavDropdown.Item>
						</NavDropdown>
					</Button>
					<Nav.Link href='/Contact'>
						<Button id='AppBar_menuButton' className='noHoverBg'>
							Contact<span class='sr-only'>(current)</span>
						</Button>
					</Nav.Link>
					<Nav.Link href='/Support'>
						<Button id='AppBar_menuButton' className='noHoverBg'>
							Support
						</Button>
					</Nav.Link>
					<Nav.Link href='/Login'>
						<Button id='AppBar_menuButton' className='noHoverBg'>
							Login
						</Button>
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}
export { NavBar }
