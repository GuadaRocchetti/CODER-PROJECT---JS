// Registrar datos del cliente
let clientes= JSON.parse(localStorage.getItem('clientes'));
function ingresarDatosCliente () {
let continuar = true;
while (continuar){
    const nombre = prompt("Ingrese el nombre del cliente:");
    const apellido = prompt("Ingrese el apellido del cliente:");
    const celular = prompt(" Ingrese el celular del cliente:");
    const email = prompt("Ingrese el correo electrónico del cliente:");
    const nombreObra = prompt ("Ingrese el nombre de la obra:");
    const ubicaciónObra = prompt ("Ingrese la ubicación de la obra:");

if (nombre && apellido && celular && email && nombreObra && ubicaciónObra){
   let cliente = {
    nombre: nombre,
    apellido: apellido,
    celular: celular,
    email: email,
    nombreObra: nombreObra,
    ubicaciónObra: ubicaciónObra,
};

clientes.push(cliente);
alert ("Datos ingresados correctamente.");
console.log("Clientes registrados:");
console.log(clientes);
} else {
    alert("Los datos ingresados son incorrectos o incompletos. No existe ningún cliente con esta información.");
}
continuar= confirm("Desea ingresar otro cliente?");
}
}
ingresarDatosCliente ();

//Seleccionar el uso/tipo de construcción
function seleccionarTipoConstruccion (){
    let tiposdeConstrucciónSeleccionada=("Seleccione el tipo de construcción: Ingrese el número correspondiente:\n1. Vivienda Unifamiliar\n2. Comercio\n3. Superficie Grandes Luces\n4. Bloque de Viviendas");
    let tipodeConstrucciónSeleccionada;
    let precioPorMetroCuadrado;

    for(let i= 0; i < tiposdeConstrucciónSeleccionada.length; i++){
        if (tipodeConstrucciónSeleccionada [i].id === tipodeConstrucciónSeleccionada){
            tiposdeConstrucciónSeleccionada = tiposConstrucción [i].tipo;
            precioPorMetroCuadrado = tiposConstrucción [i].precioPorMetroCuadrado;
            alert("Eligió la opción:" + tipodeConstrucciónSeleccionada);
            return { tipodeConstrucciónSeleccionada, precioPorMetroCuadrado};
        }
    }
    alert("El tipo de construcción seleccionada no existe. Por favor, intente de nuevo.");
    return seleccionarTipoConstruccion ();
}  

//Array con los tipos de construcción y sus precios por metro cuadrado
const tiposConstrucción= [
    {id: "1", tipo: "Vivienda Unifamiliar", precioPorMetroCuadrado: 20},
    {id: "2", tipo:"Comercio", precioPorMetroCuadrado: 15},
    {id: "3", tipo: "Superficie Grandes Luces", precioPorMetroCuadrado: 10},
    {id: "4", tipo: "Bloque de Viviendas", precioPorMetroCuadrado: 15}
];
// Seleccionar precio por metro cuadrado según el tipo de consrucción
const totalmetroscuadrados= prompt("Ingrese la cantidad de metros cuadrados del proyecto:");
let precioPorMetroCuadrado;
let tipodeConstrucciónSeleccionada
function calcularpreciofinal (){
switch (tipoConstrucción){
    case "1":
        precioPorMetroCuadrado= 20;
        tipodeConstrucciónSeleccionada= "Vivienda Unifamiliar";
    break;
    case "2":
        precioPorMetroCuadrado= 15;
        tipodeConstrucciónSeleccionada= "Comercio";
    break;
    case "3":
        precioPorMetroCuadrado= 10;
        tipodeConstrucciónSeleccionada="Superficie Grandes Luces";
    break;
    case "4":
        precioPorMetroCuadrado= 15;
        tipodeConstrucciónSeleccionada= "Bloque de Viviendas";
    break; 
default:
    alert("El tipo de construcción seleccionada es inexitente. Por favor ingrese una opción válida.");
    return;
}
const PrecioFinal= precioPorMetroCuadrado * metrosCuadrados;
}

function mostrarClientes(){
    const listaClientes= document.getElementById('listaClientes');
    listaClientes.innerHTML = '';
    clientes.forEach((cliente,index) => {
        const li = document.createElement('li');
        li.textContent = '${cliente.nombre}, ${cliente.apellido}, Obra: ${cliente.nombreObra}, Ubicación: ${cliente.ubicaciónObra}';
        listaClientes.appendChild(li);
    });
}

document.getElementById('guardarCliente').addEventListener('click', function(){
 const nombre= document.getElementById ('nombre').value;
 const apellido= document.getElementById('apellido').value;
 const celular= document.getElementById('celular').value;
 const email= document.getElementById ('email').value;
 const nombreObra= document.getElementById ('nombreObra').value;
 const ubicaciónObra= document.getElementById ('ubicaciónObra').value;
})

if (nombre && apellido && celular && email && nombreObra && ubicaciónObra){
    const nuevoCliente = {
        nombre,
        apellido,
        celular,
        email,
        nombreObra,
        ubicaciónObra,
    }
}

clientes.push (nuevoCliente);
localStorage.setItem('clientes', JSON.stringify(clientes));

mostrarClientes();
