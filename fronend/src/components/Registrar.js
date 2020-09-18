import React, { Component } from "react";
import axios from "axios";

export default class Registrar extends Component {
	state = {
		nombre: "",
		apellido: "",
		email: "",
		contrasenia: "",
	};

	async componentDidMount() {
		const res = await axios.get("http://localhost:8080/usuarios/");
		console.log(res);
	}

	onSubmit = async (objeto) => {
		objeto.preventDefault();
		const res = await axios.post("http://localhost:8080/usuarios/registrar", {
			nombre: this.state.nombre,
			apellido: this.state.apellido,
			email: this.state.email,
			contrasenia: this.state.contrasenia,
		});
		console.log(res);
		localStorage.setItem("token", res.data.token);
		localStorage.setItem("usuario", res.data.usuario._id);
		document.location.href = "/";
	};

	onChangeNombre = (objeto) => {
		this.setState({
			nombre: objeto.target.value,
		});
	};

	onChangeApellido = (objeto) => {
		this.setState({
			apellido: objeto.target.value,
		});
	};
	onChangeEmail = (objeto) => {
		this.setState({
			email: objeto.target.value,
		});
	};

	onChangeContrasenia = (objeto) => {
		this.setState({
			contrasenia: objeto.target.value,
		});
	};

	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<div class="form-row">
					<div class="form-group col-md-6">
						<label for="inputEmail4">Email</label>
						<input
							type="email"
							required="required"
							class="form-control"
							id="inputEmail4"
							onChange={this.onChangeEmail}
						/>
					</div>
					<div class="form-group col-md-6">
						<label for="inputPassword4">Contraseña</label>
						<input
							type="text"
							required="required"
							class="form-control"
							id="inputPassword4"
							onChange={this.onChangeContrasenia}
						/>
					</div>
				</div>
				<div class="form-row">
					<div class="col">
						<label for="inputNombre">Nombre</label>
						<input
							type="text"
							required="required"
							class="form-control"
							id="inputNombre"
							onChange={this.onChangeNombre}
						/>
					</div>
					<div class="col">
						<label for="inputApellido">Apellido</label>
						<input
							type="text"
							required="required"
							class="form-control"
							id="inputApellido"
							onChange={this.onChangeApellido}
						/>
					</div>
				</div>
				<button type="submit" class="mt-4 btn btn-primary">
					Registrarme
				</button>
			</form>
		);
	}
}
