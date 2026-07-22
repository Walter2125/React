
//ES LOS ARREGLOS EN MEJOR INFERIR EL TIPO DE DATO
const myArray:(number | string)[] = [1,2,3,4,5,6];
const myArray2 = [...myArray]; 
myArray2.push(7);
myArray2.push('hola mundo');

console.log(myArray, myArray2);
/*
for (const myNumber of myArray){
    console.log(myNumber + 10);
}
*/