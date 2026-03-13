package com.benjamin.pokemongohub.pokemon.service;

import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.benjamin.pokemongohub.pokemon.dto.TypeEffectivenessDTO;
import com.benjamin.pokemongohub.pokemon.entity.Pokemon;
import com.benjamin.pokemongohub.pokemon.entity.TypeChart;
import com.benjamin.pokemongohub.pokemon.repository.TypeChartRepository;

@Service
public class TypeChartService {
    private final TypeChartRepository typeChartRepository;
    private static final double NEUTRAL = 1.0;

    public TypeChartService(TypeChartRepository typeChartRepository) {
        this.typeChartRepository = typeChartRepository;
    }

    private List<TypeChart> getTypeChartForType(String type) {
        return type != null
                ? typeChartRepository.findById_DefendingTypeIgnoreCase(type.toLowerCase())
                : Collections.emptyList();
    }

    private Map<String, Double> toMultiplierMap(List<TypeChart> chart) {
        return chart.stream()
                .collect(Collectors.toMap(
                        TypeChart::getAttackingType,
                        TypeChart::getMultiplier));
    }

    private Map<String, Double> calculatePokemonTyping(Map<String, Double> type1, Map<String, Double> type2) {
        Map<String, Double> result = new HashMap<>();

        Set<String> attackingTypes = new HashSet<>();
        attackingTypes.addAll(type1.keySet());
        attackingTypes.addAll(type2.keySet());

        for (String type : attackingTypes) {
            double multiplier = type1.getOrDefault(type, NEUTRAL) * type2.getOrDefault(type, NEUTRAL);

            if (multiplier != NEUTRAL) {
                result.put(type, multiplier);
            }
        }

        return result;
    }

    private Map<String, Double> getTypeChartForPokemon(String type1, String type2) {
        Map<String, Double> type1Map = toMultiplierMap(getTypeChartForType(type1));
        Map<String, Double> type2Map = toMultiplierMap(getTypeChartForType(type2));

        return calculatePokemonTyping(type1Map, type2Map);
    }

    // clean this function
    private void appendToCategory(TypeEffectivenessDTO result, String type, double multiplier) {
        if (multiplier > 2) {
            result.getDoubleWeakness().add(type);
        } else if (multiplier > 1) {
            result.getWeakness().add(type);
        } else if (multiplier < 0.5) {
            result.getDoubleResistance().add(type);
        } else {
            result.getResistance().add(type);
        }
    }

    public TypeEffectivenessDTO classifyTypeChartForPokemon(Pokemon pokemon) {
        TypeEffectivenessDTO result = new TypeEffectivenessDTO();
        Map<String, Double> typeData = getTypeChartForPokemon(pokemon.getType1(), pokemon.getType2());

        for (Map.Entry<String, Double> entry : typeData.entrySet()) {
            appendToCategory(result, entry.getKey(), entry.getValue());
        }

        return result.sort();
    }
}