package com.CTornero.FitFusionHub.domain.entity;

public class Muscle {

    private int id;
    private String name;

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

    @Override
    public String toString() {
        return "Muscle{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}
