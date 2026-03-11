package com.benjamin.pokemongohub.pokemon.service;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Service;

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

    private int calculateMaxCP(Pokemon pokemon) {
        PokemonStats stats = pokemon.getStats();

        return (int) Math
                .floor(((stats.getBaseAttack() + 15)
                        * Math.sqrt(stats.getBaseDefense() + 15)
                        * Math.sqrt(stats.getBaseStamina() + 15)
                        * Math.pow(cpmRepository.findById(50.0).orElseThrow().getMultiplier(), 2))
                        / 10);
    }

    private Map<String, Object> buildPokemonResponse(Pokemon pokemon) {
        Map<String, Object> response = new LinkedHashMap<>();

        response.put("id", pokemon.getId());
        response.put("name", pokemon.getName());
        response.put("type1", pokemon.getType1());
        response.put("type2", pokemon.getType2());
        response.put("maxCp", calculateMaxCP(pokemon));
        response.put("stats", pokemon.getStats());
        response.put("typeChart", typeChartService.classifyTypeChartForPokemon(pokemon));

        return response;
    }

    public Map<String, Object> getPokemonByName(String name) {
        Pokemon pokemon = pokemonRepository.findByNameIgnoreCase(name)
                .orElseThrow(() -> new RuntimeException("Pokemon not found"));

        return buildPokemonResponse(pokemon);
    }
}
