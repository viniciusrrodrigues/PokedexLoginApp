import './styles/global.css';
import './App.css';
import SearchBar from './components/SearchBar';
import PokemonCard from './components/PokemonCard';
import { usePokemon } from './hooks/usePokemon';

function PokeballIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="logo-icon">
      <circle cx="16" cy="16" r="15" stroke="white" strokeWidth="2" opacity="0.6"/>
      <path d="M1 16h30M11 16a5 5 0 0110 0M11 16a5 5 0 0010 0" stroke="white" strokeWidth="2" opacity="0.6"/>
      <circle cx="16" cy="16" r="3" fill="white" opacity="0.8"/>
    </svg>
  );
}

export default function App() {
  const { result, loading, error, search } = usePokemon();

  return (
    <main className="app">
      {/* Background gradient orbs */}
      <div className="bg-orb bg-orb--1" />
      <div className="bg-orb bg-orb--2" />

      <div className="app-inner">
        {/* Header */}
        <header className="app-header">
          <div className="app-logo">
            <PokeballIcon />
            <span className="app-logo-text">Pokédex</span>
          </div>
          <p className="app-subtitle">
            Digite o nome de um Pokémon para ver seus detalhes e evoluções
          </p>
        </header>

        {/* Search */}
        <div className="app-search">
          <SearchBar onSearch={search} loading={loading} />
        </div>

        {/* States */}
        {loading && (
          <div className="app-loading">
            <div className="loading-pokeball">
              <PokeballIcon />
            </div>
            <p className="loading-text">Procurando Pokémon...</p>
          </div>
        )}

        {error && !loading && (
          <div className="app-error">
            <span className="error-emoji">✕</span>
            <p className="error-message">{error}</p>
            <p className="error-hint">Verifique o nome e tente novamente.</p>
          </div>
        )}

        {result && !loading && (
          <div className="app-result">
            <PokemonCard result={result} />
          </div>
        )}

        {!result && !loading && !error && (
          <div className="app-empty">
            <div className="empty-pokeball">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" opacity="0.15">
                <circle cx="40" cy="40" r="38" stroke="white" strokeWidth="3"/>
                <path d="M2 40h76M28 40a12 12 0 0124 0M28 40a12 12 0 0024 0" stroke="white" strokeWidth="3"/>
                <circle cx="40" cy="40" r="7" fill="white"/>
              </svg>
            </div>
            <p className="empty-text">Escolha um Pokémon para começar</p>
          </div>
        )}
      </div>
    </main>
  );
}
