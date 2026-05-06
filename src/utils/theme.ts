export const TYPE_COLORS: Record<string, { bg: string; accent: string; glow: string; badge: string }> = {
  fire:     { bg: '#1a0a00', accent: '#FF6B35', glow: 'rgba(255,107,53,0.5)', badge: '#FF6B35' },
  water:    { bg: '#00091a', accent: '#4FC3F7', glow: 'rgba(79,195,247,0.5)', badge: '#1E88E5' },
  grass:    { bg: '#001a00', accent: '#66BB6A', glow: 'rgba(102,187,106,0.5)', badge: '#388E3C' },
  electric: { bg: '#1a1400', accent: '#FFD600', glow: 'rgba(255,214,0,0.5)', badge: '#F9A825' },
  psychic:  { bg: '#1a0010', accent: '#F06292', glow: 'rgba(240,98,146,0.5)', badge: '#C2185B' },
  ice:      { bg: '#001218', accent: '#80DEEA', glow: 'rgba(128,222,234,0.5)', badge: '#0097A7' },
  dragon:   { bg: '#06001a', accent: '#7E57C2', glow: 'rgba(126,87,194,0.5)', badge: '#512DA8' },
  dark:     { bg: '#0d0d0d', accent: '#8D6E63', glow: 'rgba(141,110,99,0.5)', badge: '#4E342E' },
  fairy:    { bg: '#1a0018', accent: '#F48FB1', glow: 'rgba(244,143,177,0.5)', badge: '#C2185B' },
  fighting: { bg: '#1a0500', accent: '#EF5350', glow: 'rgba(239,83,80,0.5)', badge: '#C62828' },
  poison:   { bg: '#0f001a', accent: '#AB47BC', glow: 'rgba(171,71,188,0.5)', badge: '#7B1FA2' },
  ground:   { bg: '#1a1000', accent: '#D4A373', glow: 'rgba(212,163,115,0.5)', badge: '#8D6E63' },
  rock:     { bg: '#141008', accent: '#BCAAA4', glow: 'rgba(188,170,164,0.5)', badge: '#795548' },
  bug:      { bg: '#0a1400', accent: '#AED581', glow: 'rgba(174,213,129,0.5)', badge: '#689F38' },
  ghost:    { bg: '#0a0014', accent: '#9575CD', glow: 'rgba(149,117,205,0.5)', badge: '#512DA8' },
  steel:    { bg: '#0f0f14', accent: '#90A4AE', glow: 'rgba(144,164,174,0.5)', badge: '#546E7A' },
  flying:   { bg: '#000d1a', accent: '#81D4FA', glow: 'rgba(129,212,250,0.5)', badge: '#0288D1' },
  normal:   { bg: '#111111', accent: '#BDBDBD', glow: 'rgba(189,189,189,0.4)', badge: '#757575' },
};

export function getTypeTheme(types: string[]) {
  const primary = types[0] ?? 'normal';
  return TYPE_COLORS[primary] ?? TYPE_COLORS['normal'];
}

export function formatStatName(name: string): string {
  const map: Record<string, string> = {
    hp: 'HP',
    attack: 'ATK',
    defense: 'DEF',
    'special-attack': 'SpA',
    'special-defense': 'SpD',
    speed: 'SPD',
  };
  return map[name] ?? name.toUpperCase();
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function formatId(id: number): string {
  return `#${String(id).padStart(3, '0')}`;
}
