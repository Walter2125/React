import { describe, expect, test } from "vitest";
import { render, screen } from '@testing-library/react';
import { MyAwesomeApp } from "./MyAwesomeApp";


describe('MyAwesomeApp', () => {
    test('Deberia realizar firstname and lastName', () =>{
        // const {container} = render(<MyAwesomeApp/>);
        // console.log(container.innerHTML);

        render(<MyAwesomeApp/>);
        screen.debug();

        // const h1 = screen.getByTestId('first-name-title');
        // expect(h1.innerHTML).toContain('Fernando');
    });

    test('should match snapshot', ()=>{
        render(<MyAwesomeApp/>);
        expect(screen.getByTestId('div-app')).toMatchSnapshot();
    });
});