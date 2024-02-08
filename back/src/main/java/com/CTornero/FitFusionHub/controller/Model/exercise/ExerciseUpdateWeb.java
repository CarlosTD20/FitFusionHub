package com.CTornero.FitFusionHub.controller.Model.exercise;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ExerciseUpdateWeb {
    private int id;
    private String name;
    private String description;
    private int muscleId;
}
