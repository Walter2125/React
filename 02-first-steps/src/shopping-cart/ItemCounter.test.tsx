import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";
import { fireEvent, render, screen } from "@testing-library/react";



describe ('ItemCounter', () => {

    test('should render with default values', () => {
        const name = 'Control de Nintendo';
        render(<ItemCounter name={name}/>);

        expect( screen.getByText(name)).toBeDefined();
        expect( screen.getByText(name)).not.toBeNull();
    });

    test('should render with custom quantity', () => {
        const name = 'Control de Nintendo';
        const quantity = 10
        render(<ItemCounter name={name} quantity={quantity}/>);

        expect( screen.getByText(quantity)).toBeDefined();
    });


    test('should increase count when +1 button is pressed', () => {
      render(<ItemCounter name={'Test item'} quantity={1}/>)  

      const [buttomsAdd] = screen.getAllByRole('button'); //Busca todos los elementos que tengan rol button
      
      fireEvent.click(buttomsAdd); //simular un click
      expect(screen.getByText('2')).toBeDefined();
        
    });

    test('should decrease count when -1 button is pressed and quantiti = 5', () => {
      render(<ItemCounter name={'Test item'} quantity={5}/>)  
      
      const [, buttomsSubtract] = screen.getAllByRole('button');
      fireEvent.click(buttomsSubtract);
      expect(screen.getByText('4')).toBeDefined();
    });

    test('should not decrease count when -1 button is pressed and quantiti = 1', () => {
      render(<ItemCounter name={'Test item'} quantity={1}/>)  
      
      const [, buttomsSubtract] = screen.getAllByRole('button');
      fireEvent.click(buttomsSubtract);
      expect(screen.getByText('1')).toBeDefined();
    });

    test('should change to red when count is 1', () =>{
        const quantity = 1;
       render(<ItemCounter name={'Test item'} quantity={quantity}/>)  
       
       const itemText = screen.getByText('Test item');
       console.log(itemText.style.color);
       expect(itemText.style.color).toBe('red');
    });

    test('should change to red when count is 1', () =>{
        const quantity = 2;
       render(<ItemCounter name={'Test item'} quantity={quantity}/>)  
       
       const itemText = screen.getByText('Test item');
       expect(itemText.style.color).toBe('black');
    });
});