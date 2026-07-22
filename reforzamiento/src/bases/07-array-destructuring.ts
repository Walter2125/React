


const caracterNames = ['Goku', 'Vegeta', 'Trunks'];

const [, , p3 ] = caracterNames;
console.log({p3});


const returnArrayFn = () => {
    return ['ABC', 123] as const;
}
const [letras, numeros] = returnArrayFn();

console.log(numeros, letras);


//TAREA
const useState = (value: string) => {
    return [
        value,
        (newValue: string) => {
            console.log(newValue);
        },     
    ] as const;
};
  
const [name, setName] = useState('Goku');
console.log(name);       // Goku
setName('Vegeta');