//Código del cuadrado
console.group("Cuadrado");

/* const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: "+ ladoCuadrado + "cm"); */

function perimetroCuadrado(ladoCuadrado){
    return ladoCuadrado * 4
} 

/* console.log("El perímetro del cuadrado mide: "+ perimetroCuadrado + "cm"); */

/* const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado mide: "+ areaCuadrado + "cm^2"); */

function areaCuadrado(ladoCuadrado){
    return ladoCuadrado * ladoCuadrado;
}

console.groupEnd();

//Código del triangulo
console.group("Triángulo");

/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 7;
const baseTriangulo = 8;
const alturaTriangulo = 12.5;

console.log("Los lados del triángulo miden: "+ ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm" );

console.log("La altura del triángulo mide: "+ baseTriangulo + "cm"); */

/* const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo mide: "+ perimetroTriangulo + "cm"); */

function  perimetroTriangulo (ladoTriangulo1,  ladoTriangulo2, baseTriangulo){
    return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
}

/* const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triángulo mide: "+ areaTriangulo + "cm^2");  */

function areaTriangulo (baseTriangulo, alturaTriangulo){
    return (baseTriangulo * alturaTriangulo) /2;
}

console.groupEnd();

//Código del Círculo
console.group("Círculo");

/* const radioCirculo = 10;
const diametroCirculo = radioCirculo * 2; */
const PI = Math.PI;

function diametroCirculo(radioCirculo){
    return radioCirculo * 2;
}
/* console.log("El rádio del círculo mide: "+ radioCirculo + "cm");
console.log("El diámetro del círculo mide: "+ diametroCirculo + "cm");
console.log("PI mide: "+ PI + "cm"); */

/* const perimetroCirculo = PI * diametroCirculo;
console.log("El perímetro del círculo mide: " + perimetroCirculo + "cm"); */

function perimetroCirculo(radioCirculo){
    const diametro = diametroCirculo(radioCirculo);
    return diametro * PI;
}

/* const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del círculo mide: "+ areaCirculo + "cm^2"); */

function areaCirculo(radioCirculo){
    return (radioCirculo * radioCirculo) * PI;

}

console.groupEnd();



/* Interactuando con HTML */

const resultado = document.getElementById('resultado')

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    resultado.innerHTML = area
    /* alert (area);  */

}

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    resultado.innerHTML = perimetro
    /* alert (perimetro);  */
}




