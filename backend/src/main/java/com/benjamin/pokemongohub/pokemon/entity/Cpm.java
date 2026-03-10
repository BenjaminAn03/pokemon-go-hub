package com.benjamin.pokemongohub.pokemon.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import jakarta.persistence.Id;

@Entity
@Table(name = "cpm")
public class Cpm {
    @Id
    @Column(name = "level")
    private Double level;

    @Column(name = "multiplier")
    private Double multiplier;

    public Cpm() {

    }

    public Double getLevel() {
        return level;
    }

    public Double getMultiplier() {
        return multiplier;
    }

    public void setLevel(Double level) {
        this.level = level;
    }

    public void setMultiplier(Double multiplier) {
        this.multiplier = multiplier;
    }
}
