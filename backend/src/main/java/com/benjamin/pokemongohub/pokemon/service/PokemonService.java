package com.benjamin.pokemongohub.pokemon.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.benjamin.pokemongohub.pokemon.entity.Pokemon;
import com.benjamin.pokemongohub.pokemon.repository.PokemonRepository;

@Service
public class PokemonService {
    private final PokemonRepository pokemonRepository;

    public PokemonService(PokemonRepository pokemonRepository) {
        this.pokemonRepository = pokemonRepository;
    }

    public List<Pokemon> getAllPokemon() {
        return pokemonRepository.findAll();
    }

    public List<String> getPokemonByType(String type) {
        return pokemonRepository.findByType(type.toLowerCase());
    }

    public Pokemon getPokemonByName(String name) {
        return pokemonRepository.findByNameIgnoreCase(name)
                .orElseThrow(() -> new RuntimeException("Pokemon not found"));
    }
}
