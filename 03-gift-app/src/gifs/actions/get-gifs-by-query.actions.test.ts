import { beforeEach, describe, expect, test, vi} from "vitest";
import AxiosMockAdaper from 'axios-mock-adapter';

import { giphyApi } from "../api/giphy.api";
import { giphySearchResponseMock } from "./../../../tests/mocks/giphy.response.data"
import { getGifsByQuery } from "./get-gifs-by-query.actions";

describe('getGifsByQuery', () => {

    let mock = new AxiosMockAdaper(giphyApi);

    beforeEach(() => {
        mock = new AxiosMockAdaper(giphyApi);
    });
    // test('should return a list of gifs', async() => {
    //     const gifs = await getGifsByQuery('Saitama');
    //     const [gifs1] = gifs;
        
    //     expect(gifs.length).toBe(10);

    //     expect(gifs1).toEqual({
    //         id: expect.any(String),
    //         height: expect.any(Number),
    //         width: expect.any(Number),
    //         title: expect.any(String),
    //         url: expect.any(String),
    //     });
    // }); 

    test('should return a lift of gifs', async() => {
        mock.onGet('/search').reply(200, giphySearchResponseMock);
        const gifs = await getGifsByQuery('goku');

        expect(gifs.length).toBe(10);
        gifs.forEach( gif => {
            expect(typeof gif.id).toBe('string');
            expect(typeof gif.title).toBe('string');
            expect(typeof gif.url).toBe('string');
            expect(typeof gif.width).toBe('number');
            expect(typeof gif.height).toBe('number');
        });
    });

    test('should return an empty lift of gifs if query id empty', async() => {
        // mock.onGet('/search').reply(200, giphySearchResponseMock);
        mock.restore
        const gifs = await getGifsByQuery('');

        expect(gifs.length).toBe(0);
    });

    test('should handle error when the API returns an erros', async() => {

        const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
        mock.onGet('/search').reply(400, {
            data: {
                message: 'Bad Request',
            },
        });

        const gifs = await getGifsByQuery ('goku');
        
        expect(gifs.length).toBe(0);
        expect(consoleErrorSpy).toHaveBeenCalled();
        expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
        expect(consoleErrorSpy).toHaveBeenCalledWith(expect.anything());


    });
});