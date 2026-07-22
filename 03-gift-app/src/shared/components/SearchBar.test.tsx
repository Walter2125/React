import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { SearchBar } from "./SearchBar";


describe('Search', () => {
    test('should render searchbar correctly', () => {
        const { container } = render(<SearchBar OnQuery={()=>{}}/>)
        expect(container).toMatchSnapshot();
        expect(screen.getByRole('textbox')).toBeDefined();
        expect(screen.getByRole('button')).toBeDefined();
    });

    test('should call onquery with the correct value after 700ms', async() => {
        const OnQuery = vi.fn();
        render(<SearchBar OnQuery={OnQuery}/>);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'test'}});

        // await new Promise((resolve) => setTimeout(resolve, 1001));
        waitFor(() => {
        expect(OnQuery).toHaveBeenCalled();
        expect(OnQuery).toHaveBeenCalledWith('test');
        });
    });

    test('should call only once with the last value (debounce)', async() => {
        const OnQuery = vi.fn();
        render(<SearchBar OnQuery={OnQuery}/>);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 't'}});
        fireEvent.change(input, { target: { value: 'te'}});
        fireEvent.change(input, { target: { value: 'tes'}});
        fireEvent.change(input, { target: { value: 'test'}});

        await waitFor (() => {
            expect(OnQuery).toHaveBeenCalledTimes(1);
            expect(OnQuery).toHaveBeenLastCalledWith('test');
        });
    });

    test('shoul call onQuery when button clicked with the input value', () => {
        const OnQuery = vi.fn();
        render(<SearchBar OnQuery={OnQuery}/>);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'test'}});

        const buttom = screen.getByRole('button');
        fireEvent.click(buttom);

        expect(OnQuery).toHaveBeenCalledTimes(1);
        expect(OnQuery).toHaveBeenCalledWith('test');
    });

    test('should the input has the correct placeholder value', () => {
        const value = 'buscar gif';
        render(<SearchBar OnQuery={() => {}} placeholder={value}/>);
    // screen.debug();

        expect(screen.getByPlaceholderText(value)).toBeDefined();
    });
});