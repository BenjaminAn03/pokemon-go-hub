package com.benjamin.pokemongohub.pokemon.service;

import java.util.List;
import org.springframework.stereotype.Service;

import com.benjamin.pokemongohub.pokemon.dto.PokemonProfileDTO;
import com.benjamin.pokemongohub.pokemon.entity.Pokemon;
import com.benjamin.pokemongohub.pokemon.entity.PokemonStats;
import com.benjamin.pokemongohub.pokemon.repository.CpmRepository;
import com.benjamin.pokemongohub.pokemon.repository.PokemonRepository;

@Service
public class PokemonService {
    private final PokemonRepository pokemonRepository;
    private final CpmRepository cpmRepository;
    private final TypeChartService typeChartService;

    public PokemonService(PokemonRepository pokemonRepository, CpmRepository cpmRepository,
            TypeChartService typeChartService) {
        this.pokemonRepository = pokemonRepository;
        this.cpmRepository = cpmRepository;
        this.typeChartService = typeChartService;
    }

    public List<Pokemon> getAllPokemon() {
        return pokemonRepository.findAll();
    }

    public List<String> getPokemonByType(String type) {
        return pokemonRepository.findByType(type.toLowerCase());
    }

    // move CP calculation to service file
    private int calculatePokemonMaxCP(Pokemon pokemon) {
        PokemonStats stats = pokemon.getStats();

        return (int) Math
                .floor(((stats.getBaseAttack() + 15)
                        * Math.sqrt(stats.getBaseDefense() + 15)
                        * Math.sqrt(stats.getBaseStamina() + 15)
                        * Math.pow(cpmRepository.findById(50.0).orElseThrow().getMultiplier(), 2))
                        / 10);
    }

    private PokemonProfileDTO createPokemonProfile(Pokemon pokemon) {
        return new PokemonProfileDTO(
                pokemon.getId(),
                pokemon.getName(),
                pokemon.getType1(),
                pokemon.getType2(),
                calculatePokemonMaxCP(pokemon),
                pokemon.getStats(),
                typeChartService.classifyTypeChartForPokemon(pokemon));
    }

    public PokemonProfileDTO getPokemonByName(String name) {
        Pokemon pokemon = pokemonRepository.findByNameIgnoreCase(name)
                .orElseThrow(() -> new RuntimeException("Pokemon not found"));

        return createPokemonProfile(pokemon);
    }
}
