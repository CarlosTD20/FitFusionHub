package com.CTornero.FitFusionHub.persistence.model;

import java.util.List;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "routines")
@Data
@NoArgsConstructor
public class RoutineEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String description;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "exercises_routines",
        joinColumns = @JoinColumn(name = "id_routine"),
        inverseJoinColumns = @JoinColumn(name = "id_exercise")
    )
    private List<ExerciseEntity> ExerciseEntity;
}