package com.CTornero.FitFusionHub.persistence.model;

import java.util.List;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Rutinas")
@Data
@NoArgsConstructor
public class RutinasEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String descripcion;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "ejercicios_rutinas",
        joinColumns = @JoinColumn(name = "id_rutina"),
        inverseJoinColumns = @JoinColumn(name = "id_ejercicio")
    )
    private List<EjerciciosEntity> EjerciciosEntity;
}