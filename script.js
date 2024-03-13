////alert("Hola este es mi Javascript");
//let nombre="Martha";
//nombre="Rosa";
//var nombre1="Martha";
//const nombre2="Martha";
//console.log(nombre);
//console.log(nombre1);
//console.log(nombre2);

let contenidoTitulo="Nombre";
let titulo=document.querySelector(".logo .fuente");
titulo.innertHTML=contenidoTitulo;

//CONDICIONALES
let textoTitulo=titulo.innerText;
console.log(textoTitulo);

if (textoTitulo=="Nombre"){
    titulo.innertHTML="Otro";
} else {
    console.log("No se cumple");
}