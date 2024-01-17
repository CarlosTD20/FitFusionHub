package com.CTornero.FitFusionHub.domain.entity;

public class Ejercicios {

    private int id;

    private String nombre;
    private String descripcion;
    private String nameMusculo;
    
    public Ejercicios(String nombre, String descripcion, String nameMusculo) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.nameMusculo = nameMusculo;
    }

    public Ejercicios(int id, String nombre, String descripcion, String nameMusculo) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.nameMusculo = nameMusculo;
    }

    public int getid() {
        return id;
    }

    public void setid(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getNameMusculo() {
        return nameMusculo;
    }

    public void setNameMusculo(String nameMusculo) {
        this.nameMusculo = nameMusculo;
    }

    @Override
    public String toString() {
        return "Ejercicios [id=" + id + ", nombre=" + nombre + ", descripcion=" + descripcion
                + ", nameMusculo=" + nameMusculo + "]";
    }
}
