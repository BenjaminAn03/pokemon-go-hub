package com.benjamin.pokemongohub.pokemon.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;

@Entity
@Table(name = "pokemon_stats")
public class PokemonStats {
    @Id
    @JsonIgnore
    @Column(name = "id")
    private Long id;

    @Column(name = "base_attack")
    private Integer baseAttack;

    @Column(name = "base_defense")
    private Integer baseDefense;

    @Column(name = "base_stamina")
    private Integer baseStamina;

    @OneToOne
    @MapsId
    @JoinColumn(name = "id")
    @JsonBackReference
    private Pokemon pokemon;

    public PokemonStats() {

    }

    public Long getId() {
        return id;
    }

    public Integer getBaseAttack() {
        return baseAttack;
    }

    public Integer getBaseDefense() {
        return baseDefense;
    }

    public Integer getBaseStamina() {
        return baseStamina;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setBaseAttack(Integer baseAttack) {
        this.baseAttack = baseAttack;
    }

    public void setBaseDefense(Integer baseDefense) {
        this.baseDefense = baseDefense;
    }

    public void setBaseStamina(Integer baseStamina) {
        this.baseStamina = baseStamina;
    }
}
