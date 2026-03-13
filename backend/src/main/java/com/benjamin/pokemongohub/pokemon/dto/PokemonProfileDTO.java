package com.benjamin.pokemongohub.pokemon.dto;

import com.benjamin.pokemongohub.pokemon.entity.PokemonStats;

public class PokemonProfileDTO {
    private Long id;
    private String name;
    private String type1;
    private String type2;
    private Integer maxCp;
    private PokemonStats stats;
    private TypeEffectivenessDTO typeEffectiveness;

    public PokemonProfileDTO() {

    }

    public PokemonProfileDTO(Long id, String name, String type1, String type2, Integer maxCp, PokemonStats stats,
            TypeEffectivenessDTO typeEffectiveness) {
        this.id = id;
        this.name = name;
        this.type1 = type1;
        this.type2 = type2;
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

    public String getType1() {
        return type1;
    }

    public String getType2() {
        return type2;
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
