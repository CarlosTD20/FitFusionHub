package com.CTornero.FitFusionHub.domain.repository;

import com.CTornero.FitFusionHub.domain.entity.Routine;

import java.util.List;
import java.util.Optional;

public interface RoutineRepository {
    public void deleteRoutine(Routine routine);
    public Routine saveRoutine(Routine routine);
    public Routine findByName(String name);
    public List<Routine> getAllRoutine();
    public Optional<Routine> findRoutineByID(int id);
}
