
//funcion tradicional
function greet(name: string):string{ //string es lo que recibe
    return `Hola ${name}`;
};

//funcion de flecha
const greet2 = (name: string) => {
    return `Hola ${name}`;
};
//const greet2 = (name: string) => `Hola ${name}`; funcione simplificada

const message = greet('Goku');
const message2 = greet2('vegeta');
console.log(message, message2);


interface User {
    uid: string;
    username: string;
}

function getUser(): User{
    return{
        uid: 'ABC-123',
        username: 'El_Papi123',
    };
}


const getUser2 = () => ({
        uid: 'AC-123',
        username: 'El_Papasito123',
    });

const user = getUser()
const user2 = getUser2()
console.log(user, user2);


const myNumber: number[] = [1,2,3,4,5];

//myNumber.forEach( (value) => {
  //  console.log({value});
//});
myNumber.forEach(console.log)
