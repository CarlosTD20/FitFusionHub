package com.CTornero.FitFusionHub.domain.service;

import com.CTornero.FitFusionHub.domain.entity.Muscle;

import java.util.List;

public interface MuscleService {

    public List<Muscle> getAllMuscles();
    public Muscle findById(int id);
}
