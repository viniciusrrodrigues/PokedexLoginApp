import { useState, useCallback } from 'react';
import type { PokemonData, PokemonSpecies, EvolutionStep } from '../types/pokemon';
import { fetchPokemon, fetchPokemonSpecies, getEvolutionSteps, getDescription, getGenus } from '../utils/api';

export interface PokemonResult {
  data: PokemonData;
  species: PokemonSpecies;
  description: string;
  genus: string;
  evolutions: EvolutionStep[];
}

export function usePokemon() {
  const [result, setResult] = useState<PokemonResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = useCallback(async (name: string) => {
    if (!name.trim()) return;
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const data = await fetchPokemon(name);
      const species = await fetchPokemonSpecies(data.id);
      const evolutions = await getEvolutionSteps(data.id);
      const description = getDescription(species);
      const genus = getGenus(species);

      setResult({ data, species, description, genus, evolutions });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido.');
    } finally {
      setLoading(false);
    }
  }, []);

  return { result, loading, error, search };
}
