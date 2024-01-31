package com.CTornero.FitFusionHub.controller.Model.routine;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class RoutineCreateWeb {
    private String name;
    private String description;
    private List<Integer> exerciseId;
}