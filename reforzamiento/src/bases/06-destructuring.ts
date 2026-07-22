


const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman',
};

const {age, key, name:ironmanName } = person;

//const name = person.name;
//const age = person.age;
//const key = person.key;

console.log({ironmanName, age, key});

interface Hero{
    name: string;
    age: number;
    key: string;
    rank?: string;
}

const useContext = ({key, name, age, rank = 'sin rango' }: Hero) => {
    return {
        keyName: key,
        user: {
            name,
            age,
        },
        rank: rank,
    };
};

const { rank, keyName, user,} = useContext(person);
const {name} = user;
console.log({rank, keyName, name});

