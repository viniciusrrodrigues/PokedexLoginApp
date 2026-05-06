import type {
  PokemonData,
  PokemonSpecies,
  EvolutionChain,
  EvolutionStep,
  ChainLink,
} from '../types/pokemon';

const BASE_URL = 'https://pokeapi.co/api/v2';

export async function fetchPokemon(name: string): Promise<PokemonData> {
  const response = await fetch(`${BASE_URL}/pokemon/${name.toLowerCase().trim()}`);
  if (!response.ok) throw new Error(`Pokémon "${name}" não encontrado.`);
  return response.json();
}

export async function fetchPokemonSpecies(id: number): Promise<PokemonSpecies> {
  const response = await fetch(`${BASE_URL}/pokemon-species/${id}`);
  if (!response.ok) throw new Error('Espécie não encontrada.');
  return response.json();
}

export async function fetchEvolutionChain(url: string): Promise<EvolutionChain> {
  const response = await fetch(url);
  if (!response.ok) throw new Error('Cadeia evolutiva não encontrada.');
  return response.json();
}

function extractIdFromUrl(url: string): number {
  const parts = url.split('/').filter(Boolean);
  return parseInt(parts[parts.length - 1]);
}

function flattenChain(chain: ChainLink, steps: EvolutionStep[] = []): EvolutionStep[] {
  const id = extractIdFromUrl(chain.species.url);
  const detail = chain.evolution_details?.[0];

  steps.push({
    name: chain.species.name,
    id,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
    level: detail?.min_level ?? null,
    trigger: detail?.trigger?.name ?? 'base',
  });

  for (const next of chain.evolves_to) {
    flattenChain(next, steps);
  }

  return steps;
}

export async function getEvolutionSteps(speciesId: number): Promise<EvolutionStep[]> {
  const species = await fetchPokemonSpecies(speciesId);
  const evoChain = await fetchEvolutionChain(species.evolution_chain.url);
  return flattenChain(evoChain.chain);
}

export function getDescription(species: PokemonSpecies): string {
  const enEntry = species.flavor_text_entries.find(
    (e) => e.language.name === 'en'
  );
  if (!enEntry) return 'No description available.';
  return enEntry.flavor_text.replace(/\f|\n/g, ' ');
}

export function getGenus(species: PokemonSpecies): string {
  const enGenus = species.genera.find((g) => g.language.name === 'en');
  return enGenus?.genus ?? '';
}
