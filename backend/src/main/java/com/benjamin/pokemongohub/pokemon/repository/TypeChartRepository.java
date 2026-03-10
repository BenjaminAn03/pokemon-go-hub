package com.benjamin.pokemongohub.pokemon.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.benjamin.pokemongohub.pokemon.entity.TypeChart;
import com.benjamin.pokemongohub.pokemon.entity.TypeChartId;

public interface TypeChartRepository extends JpaRepository<TypeChart, TypeChartId> {
    List<TypeChart> findById_DefendingTypeIgnoreCase(String type);
}
