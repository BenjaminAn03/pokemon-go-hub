package com.benjamin.pokemongohub.pokemon.dto;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class TypeEffectivenessDTO {
    private List<String> doubleWeakness;
    private List<String> weakness;
    private List<String> resistance;
    private List<String> doubleResistance;

    public TypeEffectivenessDTO() {
        this.doubleWeakness = new ArrayList<>();
        this.weakness = new ArrayList<>();
        this.resistance = new ArrayList<>();
        this.doubleResistance = new ArrayList<>();
    }

    public TypeEffectivenessDTO sort() {
        Collections.sort(doubleWeakness);
        Collections.sort(weakness);
        Collections.sort(resistance);
        Collections.sort(doubleResistance);

        return this;
    }

    public List<String> getDoubleWeakness() {
        return doubleWeakness;
    }

    public List<String> getWeakness() {
        return weakness;
    }

    public List<String> getResistance() {
        return resistance;
    }

    public List<String> getDoubleResistance() {
        return doubleResistance;
    }
}
