import React, { Component } from "react";
import axios from "axios";
export default class NuevoPost extends Component {
	state = {
		categorias: [],
	};

	async componentDidMount() {
		const res = await axios.get("http://localhost:8080/categoria/");
		this.setState({ categorias: res.data });
	}

	url() {
		return `http://localhost:8080/post/${localStorage.getItem(
			"usuario"
		)}/nuevopost`;
	}

	render() {
		return (
			<form action={this.url()} enctype="multipart/form-data" method="POST">
				<div className="form-row">
					<div className="col">
						<label htmlFor="inputNombre">Tïtulo del Meme</label>
						<input
							id="inputNombre"
							type="text"
							className="form-control"
							name="nombre"
							required="required"
						/>
					</div>
				</div>
				<div className="mt-3 form-group">
					<label htmlFor="selectCategoria">Seleccionar categoria</label>
					<select
						className="form-control"
						id="FormControlSelect1"
						name="categoria"
						required="required"
					>
						<option selected value="" disabled>
							Selecciona una categoría
						</option>
						{this.state.categorias.map((categoria) => (
							<option key={categoria.nombre} value={categoria.nombre}>
								{categoria.nombre}
							</option>
						))}
					</select>
				</div>
				<div className="form-group">
					<label htmlFor="FormControlFile1">Subir archivo</label>
					<input
						type="file"
						name="image"
						required="required"
						className="form-control-file"
						id="FormControlFile1" /*onChange={this.onChangeImagen}*/
					/>
				</div>
				<button type="submit" className="mt-3 btn btn-primary">
					Guardar
				</button>
			</form>
		);
	}
}
