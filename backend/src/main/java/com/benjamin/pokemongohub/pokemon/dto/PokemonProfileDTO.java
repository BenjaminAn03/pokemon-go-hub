package com.benjamin.pokemongohub.pokemon.dto;

import java.util.List;

import com.benjamin.pokemongohub.pokemon.entity.PokemonStats;

public class PokemonProfileDTO {
    private Long id;
    private String name;
    private List<String> types;
    private Integer maxCp;
    private PokemonStats stats;
    private TypeEffectivenessDTO typeEffectiveness;

    public PokemonProfileDTO() {

    }

    public PokemonProfileDTO(Long id, String name, List<String> types, Integer maxCp, PokemonStats stats,
            TypeEffectivenessDTO typeEffectiveness) {
        this.id = id;
        this.name = name;
        this.types = types;
        this.maxCp = maxCp;
        this.stats = stats;
        this.typeEffectiveness = typeEffectiveness;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public List<String> getTypes() {
        return types;
    }

    public Integer getMaxCp() {
        return maxCp;
    }

    public PokemonStats getStats() {
        return stats;
    }

    public TypeEffectivenessDTO getTypeEffectiveness() {
        return typeEffectiveness;
    }
}
