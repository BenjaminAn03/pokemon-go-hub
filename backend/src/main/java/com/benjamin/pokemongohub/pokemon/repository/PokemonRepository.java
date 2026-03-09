package com.benjamin.pokemongohub.pokemon.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.benjamin.pokemongohub.pokemon.Pokemon;

public interface PokemonRepository extends JpaRepository<Pokemon, Long> {
    @Query("""
                SELECT p.name
                FROM Pokemon p
                WHERE LOWER(p.type1) = LOWER(:type)
                   OR LOWER(p.type2) = LOWER(:type)
            """)
    List<String> findByType(@Param("type") String type);

    Optional<Pokemon> findByNameIgnoreCase(String name);
}
