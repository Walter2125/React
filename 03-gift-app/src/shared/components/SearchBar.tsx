import { useEffect, useState, type KeyboardEvent } from "react";

interface Props {
  placeholder?: string;
  OnQuery: (query: string) => void;
}

export const SearchBar = ({ placeholder = 'Buscar', OnQuery }: Props) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout (() =>{
      OnQuery(query)
    },600)
    //OnQuery(query);

    return() => {
      clearTimeout(timeoutId);
    };
  },[query, OnQuery]);

  const handleSearch = () => {
    OnQuery(query);
    setQuery('');
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  )
}
