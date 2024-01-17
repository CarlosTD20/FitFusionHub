package com.CTornero.FitFusionHub.persistence.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "Musculos")
@Data
@NoArgsConstructor
public class MusculosEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nombre;

   /* @OneToMany( fetch = FetchType.LAZY)
    @JoinTable(
            name = "ejercicios",
            joinColumns = @JoinColumn(name = "id_musculo"),
            inverseJoinColumns = @JoinColumn(name = "id")
    )
    private List<EjerciciosEntity> ejerciciosEntities;
    */
}

