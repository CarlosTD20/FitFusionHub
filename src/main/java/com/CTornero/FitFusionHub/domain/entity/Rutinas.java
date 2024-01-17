package com.CTornero.FitFusionHub.domain.entity;

import java.util.List;

public class Rutinas {
    
    private int id;

    private String name;
    private String descripcion;
    private List<Ejercicios> Ejercicios;

    public Rutinas(String name, String descripcion) {
        this.name = name;
        this.descripcion = descripcion;
    }

    public Rutinas(int id, String name, String descripcion) {
        this.id = id;
        this.name = name;
        this.descripcion = descripcion;
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

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public List<Ejercicios> getEjercicios() {
        return Ejercicios;
    }

    public void setEjercicios(List<Ejercicios> ejercicios) {
        Ejercicios = ejercicios;
    }

    @Override
    public String toString() {
        return "Rutinas [id=" + id + ", name=" + name + ", descripcion=" + descripcion + ", Ejercicios=" + Ejercicios
                + "]";
    }
}
