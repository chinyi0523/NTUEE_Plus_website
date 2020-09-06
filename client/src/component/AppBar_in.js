import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Logo from './Logo'
import './AppBar_in.css'
import Logout from '../in/Logout'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavBar_in = () => {
	return (
		<Navbar bg='light' expand='lg'>
			<Navbar.Brand href='/in'>
				<Logo />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav>
					<Nav.Link href='/in/Career'>
						<Button id='AppBar_in_menuButton' className='noHoverBg'>
							Career
						</Button>
					</Nav.Link>
					<Nav.Link href='/in/Study'>
						<Button id='AppBar_in_menuButton' className='noHoverBg'>
							Study
						</Button>
					</Nav.Link>
					<Nav.Link href='/in/Column'>
						<Button id='AppBar_in_menuButton' className='noHoverBg'>
							Column
						</Button>
					</Nav.Link>
					<Nav.Link href='/in/Search'>
						<Button id='AppBar_in_menuButton' className='noHoverBg'>
							Search
						</Button>
					</Nav.Link>
					<Nav.Link>
						<Button id='AppBar_in_menuButton' className='noHoverBg'>
							<Logout />
						</Button>
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}
export { NavBar_in }
