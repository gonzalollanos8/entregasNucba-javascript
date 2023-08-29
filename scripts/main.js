// E1: Condicionales, Ciclos y Funciones

// Deberán realizar los siguientes ejercicios:
//--------------------------------------------------------------------------------------------------------------------------------------
// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
// const parInpar= (num) =>{
//     num = prompt('ingrese un digito');
//     if(num % 2 === 0){
//         console.log(`${num} es par`)
//     }else{
//         console.log(`el numero ${num} no es par`);
//     };
//     return parInpar;
// }

// parInpar()
//--------------------------------------------------------------------------------------------------------------------------------------

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

// const compararNum= (a,b)=>{
//     a = prompt('ingrese un numero')
//     b = prompt('ingrese otro numero para comparar')

//     if(a > b){
//         console.log(`${a} es mayor a ${b}`)
//     } else if(a < b){
//         console.log(`${a} es menor a ${b}`)
//     } else {
//         console.log("son iguales");
//     }
// }

// compararNum()
//--------------------------------------------------------------------------------------------------------------------------------------

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

// const multiCinco = (a) => {
//     a = prompt('ingrese numero');
//     if(a % 5 === 0){
//         console.log(`${a} es multiplo de 5`)
//     }
//     return multiCinco()
// }

// multiCinco()
//--------------------------------------------------------------------------------------------------------------------------------------

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
// const llegarNum = (num) => {

//     num = prompt('ingrese numero');

//     for(i = 0 ; i <= num ; i++){
//         console.log(i);
//     }
// }

// llegarNum()
//--------------------------------------------------------------------------------------------------------------------------------------

// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola esa palabra la cantidad correspondiente al número indicado.

// const repetidorPalabra = (palabra,num) =>{
//     palabra = prompt('ingrese palabra');
//     num = prompt('ingrese numero de repeticion');

//     for (i = 0; i <= num; i++){
//         console.log(`${i} ${palabra}`)
//     }
// }

// repetidorPalabra();
//--------------------------------------------------------------------------------------------------------------------------------------

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

// const array = ['Messi', 10 , 'Alvarez',19,'Enzo',24,'Paredes',5]

// const mostrarArray = () =>{ 
//     for(i = 0; i<= array.length; i++){
//         console.log(array[i])
//     };

// }

// mostrarArray()
//--------------------------------------------------------------------------------------------------------------------------------------

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

// const array = [8,15,30,49,10,24,88,90]

// const mostrarArray = () =>{

//     for (i = 0; i < array.length; i++){

//         if(i === 5){
//             continue;
//         };

//         console.log(array[i]);
//     }
// }

// mostrarArray()
//--------------------------------------------------------------------------------------------------------------------------------------

// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

const array = [8,15,30,49,10,24,88,90]

const multiArray = (multi) => {

    multi = prompt('ingrese numero multiplicador');

    for(i = 0; i< array.length; i++){
        console.log(`${array[i]} x ${multi} = ` + `${array[i]*multi}`);
    }
}
multiArray();