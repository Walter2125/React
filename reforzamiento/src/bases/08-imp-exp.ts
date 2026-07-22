import { heroes, type Hero, Owner } from "../data/heroes.data"

const getHeroBtId = (id: number): Hero | undefined => {
    const hero = heroes.find((hero) => {
        return hero.id === id;
    });

    return hero;
};

console.log(getHeroBtId(1));



//TAREA
export const getHeroesByOwner = (owner: Owner) => {
    const heroesByOwner = heroes.filter(
        hero => hero.owner === owner);
    return heroesByOwner;
};