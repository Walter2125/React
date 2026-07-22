import { FirstStepsApp } from "./FirstStepsApp";
import { render, screen } from "@testing-library/react";
import { afterEach } from "node:test";
import { describe, expect, test, vi } from "vitest";

const mockItemCounter = vi.fn((_props: unknown) => {
    return <div data-testid ="ItemCounter" />
});
vi.mock('./shopping-cart/ItemCounter', () => ({
    ItemCounter: (props: unknown) => mockItemCounter(props),
}));

// vi.mock('./shopping-cart/ItemCounter', () => ({
//     ItemCounter: (props: unknown) => 
//     <div 
//     data-testid="ItemCounter" 
//     name={props.name} 
//     quantity={props.quantity}
//     />,
// }));

describe('FirstStepApp', ()=>{
    afterEach(() => {
        vi.clearAllMocks();
    });

    test('should match snapshot', () => {
        const { container } = render(<FirstStepsApp/>);

        expect(container).toMatchSnapshot();
    });

    test('should render the correct number of ItemCounter components', () => {
        render(<FirstStepsApp/>);
        const itemCounters = screen.getAllByTestId('ItemCounter');
        expect(itemCounters.length).toBe(3);
        screen.debug();
    });

    test('should render ItemCounter with correcr props', () => {
        render(<FirstStepsApp/>)
        expect(mockItemCounter).toHaveBeenCalledTimes(9);
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Nintendo Switch 2',
            quantity: 1,
        });
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Pro Controller', 
            quantity: 7,
        });
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Super Smash', 
            quantity: 5,
        });
    });
});