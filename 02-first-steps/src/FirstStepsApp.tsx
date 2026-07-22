import { ItemCounter } from "./shopping-cart/ItemCounter";
interface ItemInCart {
    productName: string;
    quantity: number;
}

const itemInCart: ItemInCart[] = [
    {productName: 'Nintendo Switch 2', quantity: 1},
    {productName: 'Pro Controller', quantity: 7},
    {productName: 'Super Smash', quantity: 5},
];

export function FirstStepsApp(){
    return(
        <> 
            {/* <h1>Hola mundo!!</h1>
            <p>Esto es un parrafo</p>

            <button>Click me</button>

            <div>
            <h2>Hola dentro de un div</h2>
            </div> */}
            
            
            <h1>Carrito de Compras</h1>

            {
                itemInCart.map(({productName, quantity}) => (
                     <ItemCounter name= {productName} quantity={quantity}/>
                ))
            }
            {/* <ItemCounter name="Nintendo Switch 2" quantity={1}/>
            <ItemCounter name="Pro Controller" quantity={2}/>
            <ItemCounter name="Super Smash" quantity={3}/> */}
        </>
    );
}