package com.benjamin.pokemongohub.pokemon.service;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.benjamin.pokemongohub.pokemon.entity.Pokemon;
import com.benjamin.pokemongohub.pokemon.entity.PokemonStats;
import com.benjamin.pokemongohub.pokemon.entity.TypeChart;
import com.benjamin.pokemongohub.pokemon.repository.CpmRepository;
import com.benjamin.pokemongohub.pokemon.repository.PokemonRepository;
import com.benjamin.pokemongohub.pokemon.repository.TypeChartRepository;

@Service
public class PokemonService {
    private final PokemonRepository pokemonRepository;
    private final CpmRepository cpmRepository;
    private final TypeChartRepository typeChartRepository;

    public PokemonService(PokemonRepository pokemonRepository, CpmRepository cpmRepository,
            TypeChartRepository typeChartRepository) {
        this.pokemonRepository = pokemonRepository;
        this.cpmRepository = cpmRepository;
        this.typeChartRepository = typeChartRepository;
    }

    public List<Pokemon> getAllPokemon() {
        return pokemonRepository.findAll();
    }

    public List<String> getPokemonByType(String type) {
        return pokemonRepository.findByType(type.toLowerCase());
    }

    private Integer calculateMaxCP(Integer attack, Integer defense, Integer stamina, Double cpm) {
        return (int) Math
                .floor(((attack + 15)
                        * Math.sqrt(defense + 15)
                        * Math.sqrt(stamina + 15)
                        * Math.pow(cpm, 2))
                        / 10);
    }

    private Map<String, Object> getWeaknesses(String type1, String type2) {
        Map<String, Object> response = new LinkedHashMap<>();
        List<TypeChart> type1Chart = typeChartRepository.findById_DefendingTypeIgnoreCase(type1.toLowerCase());
        response.put("type1", type1Chart);

        if (type2 != null) {
            List<TypeChart> type2Chart = typeChartRepository
                    .findById_DefendingTypeIgnoreCase(type2.toLowerCase());
            response.put("type2", type2Chart);
        }

        return response;
    }

    public Map<String, Object> getPokemonByName(String name) {
        Pokemon pokemon = pokemonRepository.findByNameIgnoreCase(name)
                .orElseThrow(() -> new RuntimeException("Pokemon not found"));

        PokemonStats stats = pokemon.getStats();

        Integer maxCp = this.calculateMaxCP(
                stats.getBaseAttack(),
                stats.getBaseDefense(),
                stats.getBaseStamina(),
                cpmRepository.findById(50.0).orElseThrow().getMultiplier());

        Map<String, Object> typeChart = getWeaknesses(pokemon.getType1(), pokemon.getType2());

        Map<String, Object> response = new LinkedHashMap<>();

        response.put("id", pokemon.getId());
        response.put("name", pokemon.getName());
        response.put("type1", pokemon.getType1());
        response.put("type2", pokemon.getType2());
        response.put("maxCp", maxCp);
        response.put("stats", stats);
        response.put("typeChart", typeChart);

        return response;
    }
}
