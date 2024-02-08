package com.CTornero.FitFusionHub.domain.entity;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class Exercise {

    private int id;
    @NotBlank(message = "El nombre no puede estar en blanco")
    private String name;

    @NotBlank(message = "La descripción no puede estar en blanco")
    private String description;

    @NotNull(message = "Tienes que asignarle un músculo")
    private Muscle muscle;



    public Exercise(int id, String name, String description, Muscle muscle) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.muscle = muscle;
    }

    public Exercise(String name, String description, Muscle muscle) {
        this.name = name;
        this.description = description;
        this.muscle = muscle;
    }

    public Exercise(int id, String name, String description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    public Exercise() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Muscle getMuscle() {
        return muscle;
    }

    public void setMuscle(Muscle muscle) {
        this.muscle = muscle;
    }

    @Override
    public String toString() {
        return "Exercise{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", muscle=" + muscle +
                '}';
    }
}
