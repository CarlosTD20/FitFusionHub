package com.CTornero.FitFusionHub.domain.repository;

import com.CTornero.FitFusionHub.domain.entity.Muscle;

import java.util.List;
import java.util.Optional;

public interface MuscleRepository {
    public List<Muscle> getAllMuscles();
    public Optional<Muscle> findById(int id);
}
