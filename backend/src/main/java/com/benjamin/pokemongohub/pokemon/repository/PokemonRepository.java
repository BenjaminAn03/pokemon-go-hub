package com.benjamin.pokemongohub.pokemon.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.benjamin.pokemongohub.pokemon.Pokemon;

public interface PokemonRepository extends JpaRepository<Pokemon, Long> {
    @Query("""
                SELECT p.name
                FROM Pokemon p
                WHERE p.type1 = :type OR p.type2 = :type
            """)
    List<String> findByType(@Param("type") String type);

}
