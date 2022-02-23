function crearMovimientoEntrada(){
    document
		.querySelector('[name="producto_id_producto"]')
		.addEventListener("focus", () => {
			fetch(URL+"producto/listForMov")
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
							response[0][i].Producto +
							"</option>"
					}

					document.querySelector('[name="producto_id_producto"]').innerHTML =
						options
				})

				.catch((err) => {
					console.error("Error Servidor !!" + err)
				})
		})
}