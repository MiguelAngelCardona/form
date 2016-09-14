function mostrarMensaje1(){
alert('Alerta desde el archivo Js externo');
}

function retornarFecha()
{
	var fecha
	fecha=new Date();
	var cadena=fecha.getDate()+'/'+(fecha.getMonth()+1)+'/'+fecha.getFullYear();
	return cadena;
}

function retornarHora()
{
	var fecha
	fecha=new Date();
	var cadena=fecha.getHours()+':'+fecha.getMinutes()+':'+fecha.getSeconds();
	return cadena;
}
function fechahora() {
	var cadena = "La fecha de hoy es: "+ retornarFecha() + "-----Hora: " + retornarHora();
	document.formulario.horafecha.value =(cadena);
	return cadena;
}