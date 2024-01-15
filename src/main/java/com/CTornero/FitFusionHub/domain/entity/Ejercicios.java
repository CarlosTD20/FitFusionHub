package com.CTornero.FitFusionHub.domain.entity;


public class Ejercicios {
    private int idEjercicio;
    private String nombre;
    private String descripcion;
    private int idMusculo;

    public Ejercicios(int idEjercicio, String nombre, String descripcion, int idMusculo) {
        this.idEjercicio = idEjercicio;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.idMusculo = idMusculo;
    }

    public Ejercicios(String nombre, String descripcion, int idMusculo) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.idMusculo = idMusculo;
    }

    public int getIdEjercicio() {
        return idEjercicio;
    }

    public void setIdEjercicio(int idEjercicio) {
        this.idEjercicio = idEjercicio;
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

    public int getIdMusculo() {
        return idMusculo;
    }

    public void setIdMusculo(int idMusculo) {
        this.idMusculo = idMusculo;
    }

    @Override
    public String toString() {
        return "Ejercicios{" +
                "idEjercicio=" + idEjercicio +
                ", nombre='" + nombre + '\'' +
                ", descripcion='" + descripcion + '\'' +
                ", idMusculo=" + idMusculo +
                '}';
    }
}
