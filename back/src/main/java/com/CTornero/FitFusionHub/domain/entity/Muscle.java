package com.CTornero.FitFusionHub.domain.entity;

import java.util.List;

public class Muscle {

    private int id;
    private String name;

    private List<Exercise> exercise;

    public Muscle(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public Muscle(String name) {
        this.name = name;
    }

    public Muscle() {
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


    public List<Exercise> getExercise() {
        return exercise;
    }

    public void setExercise(List<Exercise> exercise) {
        this.exercise = exercise;
    }

    @Override
    public String toString() {
        return "Muscle{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", exercise=" + exercise +
                '}';
    }
}
