package com.CTornero.FitFusionHub.domain.service;

import com.CTornero.FitFusionHub.domain.entity.Routine;

import java.util.List;

public interface RoutineService {
    public void deleteRoutine(int routineId);
    public Routine updateRoutine(Routine routine, List<Integer> exerciseListIds);
    public Routine insertRoutine(Routine routine, List<Integer> exerciseListIds);
    public List<Routine> getAllRoutines();
    public Routine findRoutineById(int id);
}
