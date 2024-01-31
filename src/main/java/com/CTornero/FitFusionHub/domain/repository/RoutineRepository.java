package com.CTornero.FitFusionHub.domain.repository;

import com.CTornero.FitFusionHub.domain.entity.Routine;

import java.util.List;
import java.util.Optional;

public interface RoutineRepository {

    public Routine insertRoutine(Routine routine);
    public List<Routine> getAllRoutine();
    public Optional<Routine> findRoutineByID(int id);
}
