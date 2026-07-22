import type { GiphyRandomRespons } from "../data/giphy.response";

const API_KEY = 'IagaJ9qparBNf4UxnBvL6WB01ePIbv89';

const creteImageInsideDOM = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;

    document.body.append(imgElement);
};


const getRamdomGifUrl = async():Promise<string> =>{
    const response = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    );
    const {data}: GiphyRandomRespons = await response.json();
    return data.images.original.url;
};

getRamdomGifUrl().then((url) => creteImageInsideDOM(url));