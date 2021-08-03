//Codigo del Cuadrado
console.group("Cuadrados"); // Con este se agrupan los mensajes de console.log par ala consola
const ladoCuadrado = 5;
console.log(`Los lados del Cuadado miden: ${ladoCuadrado}cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perimetro del cuadrado es: ${perimetroCuadrado}cm`);

const areaCuadrada = ladoCuadrado * ladoCuadrado;
console.log(`El area del cuadrado es: ${areaCuadrada}cm^2`);
console.groupEnd(); // Aqui se cierra la agrupación los mensajes de console.log par ala consola

//Codigo del Triangulo
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(`Los lados del Triangulo miden: ${ladoTriangulo1}cm, 
${ladoTriangulo2}cm, 
${baseTriangulo}cm,`);
console.groupEnd(); // Aqui se cierra la agrupación los mensajes de console.log par ala consola