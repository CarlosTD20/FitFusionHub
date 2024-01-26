package com.CTornero.FitFusionHub.domain.service.impl;

import com.CTornero.FitFusionHub.domain.entity.Routine;
import com.CTornero.FitFusionHub.domain.repository.RoutineRepository;
import com.CTornero.FitFusionHub.domain.service.RoutineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoutineServiceImpl implements RoutineService {

    @Autowired
    RoutineRepository routineRepository;

    @Override
    public List<Routine> getAllRoutines() {
        return routineRepository.getAllRoutine();
    }

    @Override
    public Routine findRoutineById(int id) {
        return routineRepository.findRoutineByID(id).get();
    }
}
