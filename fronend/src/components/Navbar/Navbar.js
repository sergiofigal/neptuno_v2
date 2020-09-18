import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "./Navbar.css";
import NeptunoLogo from "../../assets/img/neptuno-logo-dark.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
	function GetLogo() {
		return (
			<img src={NeptunoLogo} className="logo navBarLogo" alt="Neptuno Logo" />
		);
	}

	function showMenu() {
		document.getElementById("basic-navbar-nav")
	}

	return (
		<React.Fragment>
			<ReactBootstrap.Navbar
				className="container rounded m-4 header"
				expand="md"
				sticky="top"
			>
				<ReactBootstrap.Navbar.Brand
					className="neptuno_Logo"
					id="logo"
					href="#home"
				>
					<React.StrictMode>
						<Link className="navbar-brand" to="/">
							<GetLogo />
						</Link>
					</React.StrictMode>
				</ReactBootstrap.Navbar.Brand>

				<ReactBootstrap.Navbar.Collapse
					id="basic-navbar-nav"
					className="col-9 ml-auto navbar-collapse collapse pl-0"
				>
					<ReactBootstrap.Form inline>
						<ReactBootstrap.FormControl
							type="text"
							placeholder="Buscar un Meme..."
							className="mr-sm-2 rounded-pill search-input"
						/>
						<ReactBootstrap.Button
							variant="outline-info"
							className=" icon search-icon"
						></ReactBootstrap.Button>
					</ReactBootstrap.Form>

					<ReactBootstrap.Nav className="m-auto">
						<Link className="nav-link center-v-h" to="/nuevoPost">
							Nuevo Post
							<div className="icon more-icon ml-2"></div>
						</Link>
					</ReactBootstrap.Nav>

					<ReactBootstrap.Nav className="m-auto">
						<Link className="nav-link" to="/registrar">
							Registrarse
						</Link>
					</ReactBootstrap.Nav>

					<ReactBootstrap.Nav className="icon user-icon">
						<Link className="nav-link" to="/login" id="userMenu"></Link>
					</ReactBootstrap.Nav>

					<ReactBootstrap.Nav
						className="icon logout-icon ml-3"
						onClick={showMenu}
					>
						<Link className="nav-link" to="/logout" id="logout"></Link>
					</ReactBootstrap.Nav>
				</ReactBootstrap.Navbar.Collapse>
				<ReactBootstrap.Nav className="icon menu-icon ml-3"></ReactBootstrap.Nav>
			</ReactBootstrap.Navbar>
		</React.Fragment>
	);
}
