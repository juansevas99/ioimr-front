

function displayforEntradas(response) {
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
		"<td><button type='button' class='btn btn-primary' onclick='verPedido_entrada("+response[j][Object.keys(response[0])[1]]+")'  style='font-size: 80%;' ><i class='fas fa-eye'></i></button></td>"+
		"<td><button type='button' class='btn btn-primary'   onclick='actualizar_entrada("+response[j][Object.keys(response[0])[1]]+")' style='font-size: 80%;' ><i class='fas fa-wrench'></i></button></td>"+
		"<td><button type='button' class='btn btn-dark' style='font-size: 80%;' ><i class='fas fa-forward'></i></button></td>"+
		
		+"</tr>"
	}
	

	$cuerpo.innerHTML = $cadenaCuerpo
}


function actualizar_entrada(id){
	CargarContenido('input/formCreate', 'content-wrapper','crearoutput',id)
}



function  displayforEntradasDetallle(response){
	$cabecera = document.querySelector("#tabla-entradas > .cabecera")
	$cadenaCabecera = ""
	for (let i = 0; i < Object.keys(response[0]).length; i++) {
		$cadenaCabecera += "<th>" + Object.keys(response[0])[i] + "</th>"
	}
	$cadenaCabecera += "<th colspan=3>Accciones</th>"
	$cabecera.innerHTML = $cadenaCabecera
	$cuerpo = document.querySelector("#tabla-entradas > .cuerpo")
	$cadenaCuerpo = ""
	for (let j = 0; j < response.length; j++) {
		$cadenaCuerpo += "<tr>"
		for (let k = 0; k < Object.keys(response[j]).length; k++) {
			$cadenaCuerpo += "<td>" + response[j][Object.keys(response[0])[k]] + "</td>"
		}

		$cadenaCuerpo +=
		"<td><button type='button' class='btn btn-primary' onclick='verPedido_entrada("+response[j][Object.keys(response[0])[1	]]+")'  style='font-size: 80%;' ><i class='fas fa-eye'></i></button><td>"
	}
	

	$cuerpo.innerHTML = $cadenaCuerpo
}
function verPedido_entrada(id_pedido){

	
	fetch(URL+"movimiento_entrada/list/"+id_pedido
	, {
		method: "GET"}
	).then((response) => {
		if (response.ok == false || response.status > 299) {
			return Promise.reject({ err: "Error, no se encontro el archivo" })
			
		}
		return response.json()
	})
	.then((response) => {
		console.log(response)
		
		displayforEntradasDetallle(response[0])
		
	})
	.catch((err) => {
		console.error(err)
	})
}





function entrada(id) {
	fetch(URL+"input/list/"+id, {
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
			
			displayforEntradas(response[0])
			if (response[1]){
				document.getElementById('pagination').classList.remove('d-none');
				paginateCompra(response[1]);
			}
			else{
				document.getElementById('pagination').classList.add('d-none');
			}
		})
		.catch((err) => {
			console.error(err)
		})
}
     
      function listaCompras (){

	   {
		document.querySelector("#tabla-admin > .cabecera").innerHTML =
			"Extrayendo Datos del servidor ..."
		 entrada(1)
	}

}




function paginateCompra(pages){

	cadena=""
	cadena+="<li class='page-item  small'><a class='page-link' onclick=entrada("+1+")>First</a></li>"
	for (let i = 1; i <=pages ; i++) {
		cadena+="<li class='page-item  small'><a class='page-link' onclick=entrada("+i+")>"+i+"</a></li>"		
	}
	cadena+="<li class='page-item  small'><a class='page-link' onclick=entrada("+pages+")>Last</a></li>"

	document.getElementById("pagination").innerHTML=cadena;
}
