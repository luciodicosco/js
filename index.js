/* EJEMPLO 1
let variable1 = 10;
let variable2 = 8;
if (variable2 < variable1){
    console.log("Entramos aquí");
} else{
    console.log("No entramos aquí");

} */

// Si el usuario escribe, se ejecuta else //
/* EJEMPLO 2 */
let nombreUsuario = prompt("Ingresar nombre de usuario");

if (nombreUsuario == "") {
    alert("No se ingresó el nombre de usuario");
}
else{
    alert("Usuario: " + nombreUsuario);
} 

/*EJEMPLO 3
let variable1 = 5;

if (variable1 < 10){
    console.log("Pasamos al elseif");
} else if (variable1 > 100){
    console.log("Entramos aquí");
} else if (variable1 < 50){

} */

/* EJEMPLO 4 BUCLE */
let numeroTabla = parseInt (prompt("Ingrese un número"));

for (let variable = 0; variable <= 10; variable++){
    console.log("Multiplicamos: " + numeroTabla + "x" + variable + " = " + numeroTabla * variable);
} 

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