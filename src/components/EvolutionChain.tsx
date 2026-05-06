import { capitalize, formatId } from '../utils/theme';
import type { EvolutionStep } from '../types/pokemon';
import './EvolutionChain.css';

interface Props {
  evolutions: EvolutionStep[];
  currentId: number;
  accent: string;
}

export default function EvolutionChain({ evolutions, currentId, accent }: Props) {
  return (
    <div className="evo-chain">
      {evolutions.map((evo, index) => (
        <div key={evo.id} className="evo-row">
          {index > 0 && (
            <div className="evo-arrow" style={{ color: accent }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {evolutions[index].level && (
                <span className="evo-level">Lv. {evolutions[index].level}</span>
              )}
            </div>
          )}
          <div
            className={`evo-pokemon ${evo.id === currentId ? 'evo-pokemon--active' : ''}`}
            style={evo.id === currentId ? { borderColor: accent, boxShadow: `0 0 16px ${accent}44` } : {}}
          >
            <div className="evo-img-wrap">
              <img
                src={evo.image}
                alt={evo.name}
                className="evo-img"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            <span className="evo-id">{formatId(evo.id)}</span>
            <span className="evo-name">{capitalize(evo.name)}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
