function displayforInventario(response) {
	$cabecera = document.querySelector("#tabla-admin > .cabecera")
	$cadenaCabecera = ""
	for (let i = 0; i < Object.keys(response[0]).length; i++) {
		$cadenaCabecera += "<th>" + Object.keys(response[0])[i] + "</th>"
	}
	$cadenaCabecera += "<th colspan=3>Accciones</th>"
	$cabecera.innerHTML = $cadenaCabecera
	$cuerpo = document.querySelector("#tabla-admin > .cuerpo")
	$cadenaCuerpo = ""
	for (let j = 0; j < response.length; j++) {
		$cadenaCuerpo += "<tr>"
		for (let k = 0; k < Object.keys(response[j]).length; k++) {
			$cadenaCuerpo += "<td>" + response[j][Object.keys(response[0])[k]] + "</td>"
		}

		$cadenaCuerpo +=
			"<td><button type='button' class='btn btn-primary'  style='font-size: 80%;' ><i class='fas fa-eye'></i> </button><td>"
	}
	

	$cuerpo.innerHTML = $cadenaCuerpo
}

function inventario(id) {
	fetch(URL+"pedidos/list/"+id, {
		method: "GET",
	})
		.then((response) => {
			if (response.ok == false || response.status > 299) {
				return Promise.reject({ err: "Error, no se encontro el archivo" })
				
			}
			return response.json()
		})
		.then((response) => {
			console.log(response)
			
			displayforInventario(response[0])
			if (response[1]){
				document.getElementById('pagination').classList.remove('d-none');
				paginateInventario(response[1]);
			}
			else{
				document.getElementById('pagination').classList.add('d-none');
			}
		})
		.catch((err) => {
			console.error(err)
		})
}
     
      function listainventario (){

	   {
		document.querySelector("#tabla-admin > .cabecera").innerHTML =
			"Extrayendo Datos del servidor ..."
		 inventario(1)
	}

}

function paginateInventario(pages){

	cadena=""
	cadena+="<li class='page-item  small'><a class='page-link' onclick=inventario("+1+")>First</a></li>"
	for (let i = 1; i <=pages ; i++) {
		cadena+="<li class='page-item  small'><a class='page-link' onclick=inventario("+i+")>"+i+"</a></li>"		
	}
	cadena+="<li class='page-item  small'><a class='page-link' onclick=inventario("+pages+")>Last</a></li>"

	document.getElementById("pagination").innerHTML=cadena;
}


function insertarPedido(){
	fetch(URL+"input/createOnepart", {
		method: "GET",
	})
		.then((response) => {
			if (response.ok == false || response.status > 299) {
				return Promise.reject({ err: "Error, no se encontro el archivo" })
				
			}
			return response.json()
		})
		.then((response) => {
			console.log(response)
			
			
			CargarContenido('input/formCreate', 'content-wrapper','crearoutput', response.id)

		})
		.catch((err) => {
			console.error(err)
		})
}