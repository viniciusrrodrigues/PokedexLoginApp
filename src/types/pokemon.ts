export interface PokemonType {
  slot: number;
  type: { name: string; url: string };
}

export interface PokemonStat {
  base_stat: number;
  stat: { name: string };
}

export interface PokemonAbility {
  ability: { name: string };
  is_hidden: boolean;
}

export interface PokemonSprites {
  other: {
    'official-artwork': {
      front_default: string;
    };
    home: {
      front_default: string;
    };
  };
  front_default: string;
}

export interface PokemonData {
  id: number;
  name: string;
  types: PokemonType[];
  stats: PokemonStat[];
  abilities: PokemonAbility[];
  sprites: PokemonSprites;
  height: number;
  weight: number;
  base_experience: number;
}

export interface FlavorTextEntry {
  flavor_text: string;
  language: { name: string };
  version: { name: string };
}

export interface PokemonSpecies {
  flavor_text_entries: FlavorTextEntry[];
  evolution_chain: { url: string };
  genera: { genus: string; language: { name: string } }[];
}

export interface EvolutionDetail {
  min_level: number | null;
  trigger: { name: string };
  item: { name: string } | null;
}

export interface ChainLink {
  species: { name: string; url: string };
  evolves_to: ChainLink[];
  evolution_details: EvolutionDetail[];
}

export interface EvolutionChain {
  chain: ChainLink;
}

export interface EvolutionStep {
  name: string;
  id: number;
  image: string;
  level: number | null;
  trigger: string;
}
