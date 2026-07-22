import { GifList } from "./gifs/componets/GifList"
import { PreviousSearches } from "./gifs/componets/PreviousSearches"
import { useGifs } from "./gifs/hooks/useGifs"
import { CustomHeather } from "./shared/components/CustomHeather"
import { SearchBar } from "./shared/components/SearchBar"

export const GiftApp = () => {
  const {gifs, previusTerm, handleSearch, handleTermClicked} = useGifs();
  
  return (
    <>
     {/* Heather */}
     <CustomHeather title="Buscador de Gifs" 
     description="Descubre y comparte el Gif perfecto"
     />
    
     {/* Buscador */}
     <SearchBar 
     placeholder="Busca lo que quieras"
     OnQuery= { handleSearch }
     />
     
     {/* busquedas previas */}
     <PreviousSearches 
        searches={previusTerm} 
        onLabelClickd={handleTermClicked}
     />

     {/* Gifs */}
     <GifList gifs={gifs}/>
    </>
  )
}
