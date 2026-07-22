import {describe, expect, test } from 'vitest';
import {render } from '@testing-library/react';
import { GiftApp } from './GiftApp';


describe('GifsApp', () => {
    test('should render component properly', () =>{
        const {container} = render(<GiftApp/>);

        expect(container).toMatchSnapshot();
    });
});