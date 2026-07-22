import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { CustomHeather } from "./CustomHeather";

describe('CustomHeather', () => {
    const title = 'hola mundo';

    test('slould render the title correctly', () =>{
        render(<CustomHeather title={title}/>)

        expect(screen.getByText(title)).toBeDefined();
    });

    test('should render the description when provided', () => {
        const description = 'Esta es una descripcion';
        render(<CustomHeather title={title} description={description}/>)

        expect(screen.getByText(description)).toBeDefined();
    });

    test ('should not render description when not provided', () => {
        const {container} = render(<CustomHeather title={title} />);
        
        const divElement = container.querySelector('.content-center');

        const h1 = divElement?.querySelector('h1');
        expect(h1?.innerHTML).toBe(title);

        const p = divElement?.querySelector('p');
        expect(p).toBeNull();
    });
});