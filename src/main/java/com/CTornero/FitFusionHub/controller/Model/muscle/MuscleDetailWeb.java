package com.CTornero.FitFusionHub.controller.Model.muscle;

import com.CTornero.FitFusionHub.controller.Model.exercise.ExerciseListWeb;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class MuscleDetailWeb {
    private int id;
    private String name;
    private List<ExerciseListWeb> exercise;
}
