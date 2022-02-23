function ActualizarPedidoEntrada(){
	var formData = new FormData();
	formData.append('observaciones',document.querySelector('[name="observaciones"]').value );
	formData.append('fecha_efectiva',document.querySelector('[name="fecha_efectiva"]').value);
	formData.append('proveedor_id_proveedor',document.querySelector('[name="proveedor_id_proveedor"]').value);
	
	id=document.querySelector("[name='id_pedido']").value

	console.log(formData,id)
	// fetch(URL+"input/actualizar/"+id,{
	// 	method: 'POST',
	// 	body: formData
	// })
	// 			.then((response) => {
	// 				if (response.ok == false || response.status > 299) {
	// 					return Promise.reject({ err: "Error, no se encontro el archivo" })
	// 				}
	// 				return response.text()
	// 			})
	// 			.then((response) => {
	// 			})

	// 			.catch((err) => {
	// 				console.error("Error Servidor !!" + err)
	// 			})					
}

function crearEntrada(){




document
		.querySelector('[name="proveedor_id_proveedor"]')
		.addEventListener("focus", () => {
			fetch(URL+"proveedor/visualizarProveedor")
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
							response[0][i].Id +
							">" +
							response[0][i].Proveedor +
							"</option>"
					}

					document.querySelector('[name="proveedor_id_proveedor"]').innerHTML =
						options
				})

				.catch((err) => {
					console.error("Error Servidor !!" + err)
				})
		})

    }


function retrieveAllData(id){
	fetch(URL+"input/visualizarCrear/"+id)
				.then((response) => {
					if (response.ok == false || response.status > 299) {
						return Promise.reject({ err: "Error, no se encontro el archivo" })
					}
					return response.json()
				})
				.then((response) => {
					
					document.querySelector('[name="observaciones"]').value = response[0][0].Observaciones

					document.querySelector('[name="id_pedido"]').value = id
					
					
					document.querySelector('[name="fecha_efectiva"]').value= response[0][0].FechaEfectiva

					document.querySelector('[name="proveedor_id_proveedor"]').innerHTML =
					"<option value=" +
					response[0][0].IdProveedor +
					">" +
					response[0][0].Proveedor +
					"</option>"



				})

				.catch((err) => {
					console.error("Error Servidor !!" + err)
				})


		// retrieve the input table details


		fetch(URL+"movimiento_entrada/list/"+id)
		.then((response) => {
			if (response.ok == false || response.status > 299) {
				return Promise.reject({ err: "Error, no se encontro el archivo" })
			}
			return response.json()
		})
		.then((response) => {
			console.log(response);


		})

		.catch((err) => {
			console.error("Error Servidor !!" + err)
		})

		
}