package com.CTornero.FitFusionHub.persistence.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Exercises")
@Data
@NoArgsConstructor
public class ExerciseEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String description;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_muscle")
    private MuscleEntity muscleEntity;
}


