package com.benjamin.pokemongohub.pokemon.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.benjamin.pokemongohub.pokemon.entity.Pokemon;
import com.benjamin.pokemongohub.pokemon.service.PokemonService;

@RestController
@RequestMapping("/pokemon")
public class PokemonController {
    private final PokemonService pokemonService;

    public PokemonController(PokemonService pokemonService) {
        this.pokemonService = pokemonService;
    }

    @GetMapping
    public List<Pokemon> getAllPokemon() {
        return pokemonService.getAllPokemon();
    }

    @GetMapping(params = "type")
    public List<String> getPokemonByType(@RequestParam String type) {
        return pokemonService.getPokemonByType(type);
    }

    @GetMapping(params = "name")
    public Pokemon getPokemonByName(@RequestParam String name) {
        return pokemonService.getPokemonByName(name);
    }
}
