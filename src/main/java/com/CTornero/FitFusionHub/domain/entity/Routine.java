package com.CTornero.FitFusionHub.domain.entity;

import java.util.List;

public class Routine {
    
    private int id;
    private String name;
    private String description;
    private List<Exercise> Exercise;


    public Routine(int id, String name, String description, List<Exercise> exercise) {
        this.id = id;
        this.name = name;
        this.description = description;
        Exercise = exercise;
    }

    public Routine(String name, String description, List<Exercise> exercise) {
        this.name = name;
        this.description = description;
        Exercise = exercise;
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

    public List<com.CTornero.FitFusionHub.domain.entity.Exercise> getExercise() {
        return Exercise;
    }

    public void setExercise(List<com.CTornero.FitFusionHub.domain.entity.Exercise> exercise) {
        Exercise = exercise;
    }

    @Override
    public String toString() {
        return "Routine{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", Exercise=" + Exercise +
                '}';
    }
}
