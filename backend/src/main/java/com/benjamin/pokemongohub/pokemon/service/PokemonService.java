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

    public PokemonService(PokemonRepository pokemonRepository, CpmRepository cpmRepository) {
        this.pokemonRepository = pokemonRepository;
        this.cpmRepository = cpmRepository;
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

    public Map<String, Object> getPokemonByName(String name) {
        Pokemon pokemon = pokemonRepository.findByNameIgnoreCase(name)
                .orElseThrow(() -> new RuntimeException("Pokemon not found"));

        PokemonStats stats = pokemon.getStats();

        Integer maxCp = this.calculateMaxCP(
                stats.getBaseAttack(),
                stats.getBaseDefense(),
                stats.getBaseStamina(),
                cpmRepository.findById(50.0).orElseThrow().getMultiplier());

        Map<String, Object> response = new LinkedHashMap<>();

        response.put("id", pokemon.getId());
        response.put("name", pokemon.getName());
        response.put("type1", pokemon.getType1());
        response.put("type2", pokemon.getType2());
        response.put("maxCp", maxCp);
        response.put("stats", stats);

        return response;
    }
}
