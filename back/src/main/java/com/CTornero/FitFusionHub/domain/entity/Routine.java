package com.CTornero.FitFusionHub.domain.entity;

import com.CTornero.FitFusionHub.Validation.ValidExerciseList;
import jakarta.validation.constraints.*;

import java.util.List;

public class Routine {
    
    private int id;

    @NotNull
    @NotBlank(message = "El nombre no puede estar en blanco")
    private String name;

    @NotBlank(message = "La descripción no puede estar en blanco")
    private String description;
    @NotNull
    @Size(min = 4,max = 8 ,message = "La rutina tiene que contener entre 2 y 8 ejercicios")
    @ValidExerciseList(field = "exercise")
    private List<Exercise> exercise;


    public Routine() {
    }

    public Routine(int id, String name, String description, List<Exercise> exercise) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.exercise = exercise;
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

    public List<Exercise> getExercise() {
        return exercise;
    }

    public void setExercise(List<Exercise> exercise) {
        this.exercise = exercise;
    }

    @Override
    public String toString() {
        return "Routine{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", exercise=" + exercise +
                '}';
    }
}
