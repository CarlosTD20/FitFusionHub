package com.CTornero.FitFusionHub.domain.entity;

public class Musculos {

    private int id;

    private String name;

    public Musculos(String name) {
        this.name = name;
    }

    public Musculos(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public int getid() {
        return id;
    }

    public void setid(int id) {
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
        return "Musculos [id=" + id + ", name=" + name + "]";
    }
}
