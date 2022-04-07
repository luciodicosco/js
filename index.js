/* EJEMPLO 1
let variable1 = 10;
let variable2 = 8;
if (variable2 < variable1){
    console.log("Entramos aquí");
} else{
    console.log("No entramos aquí");

} */

/* function saludar(){
    alert("Bienvenido");
}

saludar(nombreUsuario); */

// Si el usuario escribe, se ejecuta else //
/* EJEMPLO 2 */
let nombreUsuario = prompt("Ingresar nombre de usuario");

if (nombreUsuario == "") {
    alert("No se ingresó el nombre de usuario");
}
else{
    alert("Bienvenido " + nombreUsuario);
} 



/*EJEMPLO 3
let variable1 = 5;

if (variable1 < 10){
    console.log("Pasamos al elseif");
} else if (variable1 > 100){
    console.log("Entramos aquí");
} else if (variable1 < 50){

} */

/* EJEMPLO 4 BUCLE
let numeroTabla = parseInt (prompt("Ingrese un número"));

for (let variable = 0; variable <= 10; variable++){
    console.log("Multiplicamos: " + numeroTabla + "x" + variable + " = " + numeroTabla * variable);
}  */

/* EJEMPLO 5 BREAK
for (let i = 0; i < 10; i++){
    if (i == 5);{
        break;
        }
    alert(i);
} */

/* EJEMPLO 6 CONTINUE
for (let i = 0; i < 10; i++){
    if (i == 5);{
        continue;
        }
    alert(i);
} */

/* EJEMPLO 7 WHILE
let i = 0;
while (i < 10){
    console.log(i);
    i++;
} */

/* EJEMPLO SUMA
function sumar(numA, numB){
    let resultado = numA + numB;
    return resultado;
} */

/* EJEMPLO RESTA
function restar(numA, numB){
    let resultado = numA - numB;
    return resultado;
} */

/* EJEMPLO CONST 
const suma = function (numA, numB) {return numA + numB}
console.log(suma(10+5)); */

/* EJEMPLO CONST 2
const resta = function (numA, numB) {return numA - numB}
console.log(resta(10+5)); */

/* EJEMPLO CONST IVA 

const IVA = (precio) => {return precio*0.21} */

const IVA = precio => precio*0.21
function precioTotal (precio,IVA){
    return precio+IVA;
}
let precioProducto = 1250;
precioTotal(precioProducto,IVA(precioProducto))
console.log(IVA(1500));


function Calzado(marca, tipo, tallesDisp, precioAprox){
    this.marca = marca;
    this.tipo = tipo;
    this.tallesDisp = tallesDisp;
    this.precioAprox = precioAprox;
}

const calzado1 = new Calzado('Voran', 'zapato', 38-43, 8000);
const calzado2 = new Calzado('Voran', 'zapatilla', 39-44, 12000);
const calzado3 = new Calzado('Voran', 'borcego', 39-44, 10000);


const tipoCalzado = ["Zapato", "Zapatilla", "Borcego", "Botin"];
const talles = [38, 39, 40, 41, 42, 43, 44];

console.log("Tipos de calzado: " + tipoCalzado.length)
console.log("Talles: " + talles.length)