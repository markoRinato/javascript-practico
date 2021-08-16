//Codigo del Cuadrado
console.group("Cuadrados"); // Con este se agrupan los mensajes de console.log par ala consola
//const ladoCuadrado = 5;
//console.log(`Los lados del Cuadado miden: ${ladoCuadrado}cm`);

function perimetroCuadrado(lado) {
    return lado * 4;
}
console.log(`El perimetro del cuadrado es: ${perimetroCuadrado(56)}cm`);

function areaCuadrada(lado){
    return lado * lado;
}
console.log(`El area del cuadrado es: ${areaCuadrada(12)}cm^2`);

console.groupEnd(); // Aqui se cierra la agrupación los mensajes de console.log par ala consola

//Codigo del Triangulo
console.group("Triangulos");
/*const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(`Los lados del Triangulo miden: ${ladoTriangulo1}cm, 
${ladoTriangulo2}cm, 
${baseTriangulo}cm,`);
const alturaTriangulo = 5.5;
console.log(`La altura del triangulo es: ${alturaTriangulo}cm`);*/

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
console.log(`El perimetro del triangulo es: ${perimetroTriangulo(6,6,4)}cm`);

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
console.log(`El area del triangulo es: ${areaTriangulo(4,5.5)}cm^2`);

console.groupEnd(); // Aqui se cierra la agrupación los mensajes de console.log par ala consola

//Codigo del Circulo
console.group("Circulos");
//radio
/*const radioCirculo = 4;
console.log(`El radio del circulo es: ${radioCirculo}cm^2`); */
//diametro
function diametroCirculo(radio){
 return radio * 2;
}
console.log(`El diametro del circulo es: ${diametroCirculo}cm^2`);
//PI
const PI = Math.PI;
console.log(`El PI del circulo es: ${PI}cm^2`);
//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
console.log(`El perimetro del circulo es: ${perimetroCirculo(5)}cm^2`);
//area
function areaCirculo(radio){
    return (radio * radio) * PI;
}
console.log(`El area del circulo es: ${areaCirculo(5)}cm^2`);
console.groupEnd(); // Aqui se cierra la agrupación los mensajes de console.log par ala consola

//Aqui interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value; // Aqui mando a llamar solo el valor del Input "InputCuadrado".
    const perimetro = perimetroCuadrado(value); // Aqui mando a llamar solo la funcion y el valor del Input "perimetroCuadrado".
    alert(perimetro);
}


function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value; // Aqui mando a llamar solo el valor del Input "InputCuadrado".
    const area = areaCuadrada(value); // Aqui mando a llamar solo la funcion y el valor del Input "areaCuadrado".
    alert(area);
}