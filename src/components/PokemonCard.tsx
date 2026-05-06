import type { PokemonResult } from '../hooks/usePokemon';
import { getTypeTheme, formatStatName, capitalize, formatId } from '../utils/theme';
import EvolutionChain from './EvolutionChain';
import './PokemonCard.css';

interface Props {
  result: PokemonResult;
}

export default function PokemonCard({ result }: Props) {
  const { data, description, genus, evolutions } = result;
  const types = data.types.map((t) => t.type.name);
  const theme = getTypeTheme(types);
  const image =
    data.sprites.other['official-artwork'].front_default ||
    data.sprites.other.home.front_default ||
    data.sprites.front_default;

  const maxStat = 255;

  return (
    <div
      className="pokemon-card"
      style={{
        '--card-bg': theme.bg,
        '--card-accent': theme.accent,
        '--card-glow': theme.glow,
      } as React.CSSProperties}
    >
      {/* Decorative circles */}
      <div className="card-circle card-circle--1" />
      <div className="card-circle card-circle--2" />

      {/* Header */}
      <div className="card-header">
        <div className="card-meta">
          <span className="card-id">{formatId(data.id)}</span>
          <span className="card-genus">{genus}</span>
        </div>
        <h2 className="card-name">{capitalize(data.name)}</h2>
        <div className="card-types">
          {types.map((type) => (
            <span key={type} className={`type-badge type-badge--${type}`}>
              {capitalize(type)}
            </span>
          ))}
        </div>
      </div>

      {/* Image */}
      <div className="card-image-wrap">
        <div className="card-image-glow" />
        <img
          src={image}
          alt={data.name}
          className="card-image"
          onError={(e) => {
            (e.target as HTMLImageElement).src = data.sprites.front_default;
          }}
        />
      </div>

      {/* Description */}
      <p className="card-description">{description}</p>

      {/* Info grid */}
      <div className="card-info-grid">
        <div className="card-info-item">
          <span className="info-label">Altura</span>
          <span className="info-value">{(data.height / 10).toFixed(1)} m</span>
        </div>
        <div className="card-info-item">
          <span className="info-label">Peso</span>
          <span className="info-value">{(data.weight / 10).toFixed(1)} kg</span>
        </div>
        <div className="card-info-item">
          <span className="info-label">Exp. Base</span>
          <span className="info-value">{data.base_experience ?? '—'}</span>
        </div>
        <div className="card-info-item">
          <span className="info-label">Habilidades</span>
          <span className="info-value">
            {data.abilities
              .filter((a) => !a.is_hidden)
              .map((a) => capitalize(a.ability.name))
              .join(', ')}
          </span>
        </div>
      </div>

      {/* Stats */}
      <div className="card-stats">
        <h3 className="stats-title">Atributos</h3>
        {data.stats.map((stat) => (
          <div key={stat.stat.name} className="stat-row">
            <span className="stat-name">{formatStatName(stat.stat.name)}</span>
            <span className="stat-value">{stat.base_stat}</span>
            <div className="stat-bar-bg">
              <div
                className="stat-bar-fill"
                style={{ width: `${(stat.base_stat / maxStat) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Evolution chain */}
      {evolutions.length > 1 && (
        <div className="card-evolutions">
          <h3 className="stats-title">Cadeia Evolutiva</h3>
          <EvolutionChain evolutions={evolutions} currentId={data.id} accent={theme.accent} />
        </div>
      )}
    </div>
  );
}
