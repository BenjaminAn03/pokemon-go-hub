package com.benjamin.pokemongohub.pokemon.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.benjamin.pokemongohub.pokemon.entity.Pokemon;
import com.benjamin.pokemongohub.pokemon.entity.TypeChart;
import com.benjamin.pokemongohub.pokemon.repository.TypeChartRepository;

@Service
public class TypeChartService {
    private final TypeChartRepository typeChartRepository;

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

    // clean this function
    private Map<String, Double> calculatePokemonTyping(Map<String, Double> type1, Map<String, Double> type2) {
        Map<String, Double> data = new HashMap<>();

        for (String attackingType : type1.keySet()) {
            double multiplier = type1.get(attackingType) * type2.getOrDefault(attackingType, 1.0);
            if (multiplier != 1.0) {
                data.put(attackingType, multiplier);
            }
        }

        for (String attackingType : type2.keySet()) {
            if (!data.containsKey(attackingType)) {
                double multiplier = type2.get(attackingType) * type1.getOrDefault(attackingType, 1.0);
                if (multiplier != 1.0) {
                    data.put(attackingType, multiplier);
                }
            }
        }
        return data;
    }

    private Map<String, Double> getTypeChartForPokemon(String type1, String type2) {
        Map<String, Double> type1Map = toMultiplierMap(getTypeChartForType(type1));
        Map<String, Double> type2Map = toMultiplierMap(getTypeChartForType(type2));

        Map<String, Double> pokemonTypingData = calculatePokemonTyping(type1Map, type2Map);

        return pokemonTypingData;
    }

    // clean this function
    private void appendToCategory(Map<String, List<String>> result, String type, double multiplier) {
        if (multiplier > 2) {
            result.get("doubleWeakness").add(type);
        } else if (multiplier > 1) {
            result.get("weakness").add(type);
        } else if (multiplier < 0.5) {
            result.get("doubleResistance").add(type);
        } else {
            result.get("resistance").add(type);
        }
    }

    public Map<String, List<String>> classifyTypeChartForPokemon(Pokemon pokemon) {
        Map<String, Double> typeData = getTypeChartForPokemon(pokemon.getType1(), pokemon.getType2());
        Map<String, List<String>> result = new LinkedHashMap<>();

        for (String key : List.of("doubleWeakness", "weakness", "resistance", "doubleResistance")) {
            result.put(key, new ArrayList<>());
        }

        for (Map.Entry<String, Double> entry : typeData.entrySet()) {
            appendToCategory(result, entry.getKey(), entry.getValue());
        }

        for (List<String> types : result.values()) {
            Collections.sort(types);
        }

        return result;
    }
}