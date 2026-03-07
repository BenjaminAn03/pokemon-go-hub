package com.benjamin.pokemongohub.pokemon.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.benjamin.pokemongohub.pokemon.Pokemon;

public interface PokemonRepository extends JpaRepository<Pokemon, Long> {

}
