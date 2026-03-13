package com.benjamin.pokemongohub.pokemon.entity;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "type_chart")
public class TypeChart {
    @EmbeddedId
    private TypeChartId id;

    @Column(name = "multiplier")
    private Double multiplier;

    public String getAttackingType() {
        return id.getAttackingType();
    }

    public String getDefendingType() {
        return id.getDefendingType();
    }

    public Double getMultiplier() {
        return multiplier;
    }
}
