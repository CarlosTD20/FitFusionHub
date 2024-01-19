package com.CTornero.FitFusionHub.controller.Model.exercise;

import com.CTornero.FitFusionHub.controller.Model.muscle.MuscleListWeb;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ExerciseDetailWeb {
    private int id;
    private String name;
    private String description;
    private MuscleListWeb muscle;
}
