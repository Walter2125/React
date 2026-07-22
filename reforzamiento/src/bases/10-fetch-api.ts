import type { GiphyRandomRespons } from "../data/giphy.response";

const API_KEY = 'IagaJ9qparBNf4UxnBvL6WB01ePIbv89';

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

const creteImageInsideDOM = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;

    document.body.append(imgElement);
};


myRequest
.then((response) => response.json())
.then(({data}: GiphyRandomRespons) => {
    const imageUrl = data.images.original.url;
    creteImageInsideDOM(imageUrl);
})
.catch((err) => {
    console.error(err);
});