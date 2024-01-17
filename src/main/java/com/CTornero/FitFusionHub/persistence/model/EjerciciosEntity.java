package com.CTornero.FitFusionHub.persistence.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Ejercicios")
@Data
@NoArgsConstructor
public class EjerciciosEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nombre;
    private String descripcion;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_musculos")
    private MusculosEntity musculosEntity;
}
