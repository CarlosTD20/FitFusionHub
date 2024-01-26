package com.CTornero.FitFusionHub.domain.service;

import com.CTornero.FitFusionHub.domain.entity.Routine;

import java.util.List;

public interface RoutineService {

    public List<Routine> getAllRoutines();
    public Routine findRoutineById(int id);
}
