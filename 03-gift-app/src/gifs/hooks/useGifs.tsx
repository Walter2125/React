import { useRef, useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query.actions";

// const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
    const [gifs, setgifs] = useState<Gif[]>([])
    const [previusTerm, setPreviusTerms] = useState<string[]>([])
    
    const gifsCache = useRef<Record<string, Gif[]>> ({});
    
    const handleTermClicked = async ( term: string ) => {
        if (gifsCache.current[term]) {
            setgifs(gifsCache.current[term]);
            return;
        }
        const gifs = await getGifsByQuery(term);
        setgifs(gifs);
    };

    const handleSearch = async (query: string) => {
        query = query.trim().toLowerCase();
        if (query.length === 0) return;
        if (previusTerm.includes(query)) return;
        setPreviusTerms([query, ...previusTerm].splice(0, 8));

        const gifs =await getGifsByQuery(query);
        setgifs(gifs);

        gifsCache.current[query] = gifs;
    } ;


    
  return {
    //propriedades
    gifs,
    previusTerm,
    //metodos
    handleTermClicked,
    handleSearch,
  }
}
