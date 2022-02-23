function producto_crear() {
	// por ahora, la busqueda de datos en cada Select no dependera de la vista si no de la logica que se maneje en Javascript

	document
		.querySelector('[name="categoria_id_categoria"]')
		.addEventListener("focus", () => {
			fetch(URL+"categoria/listar")
				.then((response) => {
					if (response.ok == false || response.status > 299) {
						return Promise.reject({ err: "Error, no se encontro el archivo" })
					}
					return response.json()
				})
				.then((response) => {
					options = ""
					// console.log(response);
					for (let i = 0; i < response[0].length; i++) {
						options +=
							"<option value=" +
							response[0][i].COD +
							">" +
							response[0][i].Categoria +
							"</option>"
					}

					document.querySelector('[name="categoria_id_categoria"]').innerHTML =
						options
				})

				.catch((err) => {
					console.error("Error Servidor !!" + err.err)
				})
		})
	
	
		// document
		// .getElementById('atributos')
		// .addEventListener("click", () => {
		// 	fetch(URL+"atributoscat/list")
		// 		.then((response) => {
		// 			if (response.ok == false || response.status > 299) {
		// 				return Promise.reject({ err: "Error, no se encontro el archivo" })
		// 			}
		// 			return response.json()
		// 		})
		// 		.then((response) => {
		// 			atributes = ""
		// 			categoria=document.getElementById('atributos').getAttribute('name');
		// 			// console.log(response[0])
		// 			for (let i = 0; i < response[0].length; i++) {
		// 				atributes +=
		// 					"<form class='row' action='' method='POST'>"+
		// 					"<div class='form-group col'>"+
		// 					"<label>"+response[0][i].atributo+
		// 					"</label>"+
		// 					"<input name='atributo_id_artibuto' type='hidden'>"+response[0][i].idAtributo+"</input>"+
							
		// 					"</div>"+
		// 					"<div class='form-group col'>"+
		// 					"<input name='value'>"
		// 					"</div>"+
		// 					"<input name='producto_id_producto' type='hidden' value=''>"
		// 					"</form>"

		// 					"<label for='inputtext5' class='form-label'>"+response[0][i].atributo+"</label><input type='text' id='inputtext5' name='atributo_id_atributo' class='form-control' aria-describedby='textHelpBlock'>"

		// 			}

		// 			document.querySelector('[name="marca_id_marca"]').innerHTML = options
		// 		})

		// 		.catch((err) => {
		// 			console.error("Error Servidor !!" + err.err)
		// 		})
		// })
}