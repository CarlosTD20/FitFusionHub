package com.CTornero.FitFusionHub.controller.Model.routine;

import com.CTornero.FitFusionHub.controller.Model.exercise.ExerciseListWeb;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class RoutineDetailWeb {
    private int id;
    private String name;
    private String description;

    private List<ExerciseListWeb> exerciseListWebs;
}
