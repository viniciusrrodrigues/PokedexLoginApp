import { useState, type KeyboardEvent } from 'react';
import './SearchBar.css';

interface Props {
  onSearch: (name: string) => void;
  loading: boolean;
}

const SUGGESTIONS = [
  'Bulbasaur', 'Charmander', 'Squirtle', 'Pikachu',
  'Eevee', 'Gengar', 'Mewtwo', 'Lucario', 'Garchomp',
];

export default function SearchBar({ onSearch, loading }: Props) {
  const [value, setValue] = useState('');

  const handleSearch = () => {
    if (value.trim() && !loading) onSearch(value.trim());
  };

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <span className="search-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
            <path d="m16.5 16.5 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </span>
        <input
          type="text"
          className="search-input"
          placeholder="Digite o nome do Pokémon..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKey}
          disabled={loading}
        />
        <button
          className="search-btn"
          onClick={handleSearch}
          disabled={loading || !value.trim()}
        >
          {loading ? (
            <span className="search-spinner" />
          ) : (
            'Buscar'
          )}
        </button>
      </div>
      <div className="search-suggestions">
        {SUGGESTIONS.map((s) => (
          <button
            key={s}
            className="suggestion-chip"
            onClick={() => {
              setValue(s);
              onSearch(s);
            }}
            disabled={loading}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
