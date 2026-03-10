package com.benjamin.pokemongohub.pokemon.entity;

import java.io.Serializable;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public class TypeChartId implements Serializable {
    @Column(name = "attacking_type")
    private String attackingType;

    @JsonIgnore
    @Column(name = "defending_type")
    private String defendingType;

    public TypeChartId() {

    }

    public String getAttackingType() {
        return attackingType;
    }

    public String getDefendingType() {
        return defendingType;
    }

    // equals () needed for standard JPA
    @Override
    public boolean equals(Object other) {
        if (this == other)
            return true;
        if (!(other instanceof TypeChartId))
            return false;

        TypeChartId that = (TypeChartId) other;

        return Objects.equals(attackingType, that.attackingType) && Objects.equals(defendingType, that.defendingType);
    }

    // hashcode () needed for standard JPA
    @Override
    public int hashCode() {
        return Objects.hash(attackingType, defendingType);
    }
}
