package com.CTornero.FitFusionHub.domain.service.impl;

import com.CTornero.FitFusionHub.domain.entity.Exercise;
import com.CTornero.FitFusionHub.domain.entity.Routine;
import com.CTornero.FitFusionHub.domain.repository.ExerciseRepository;
import com.CTornero.FitFusionHub.domain.repository.RoutineRepository;
import com.CTornero.FitFusionHub.domain.service.RoutineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoutineServiceImpl implements RoutineService {

    @Autowired
    RoutineRepository routineRepository;
    @Autowired
    ExerciseRepository exerciseRepository;

    @Override
    public void deleteRoutine(int routineId) {
        Routine routine = routineRepository.findRoutineByID(routineId).get();
        routineRepository.deleteRoutine(routine);
    }

    @Override
    public Routine insertRoutine(Routine routine, List<Integer> exerciseListIds) {
        List<Exercise> exercises = exerciseListIds.stream()
                .map(exerciseID -> exerciseRepository.findById(exerciseID).orElseThrow(null))
                .toList();
        routine.setExercise(exercises);
        return routineRepository.insertRoutine(routine);
    }

    @Override
    public List<Routine> getAllRoutines() {
        return routineRepository.getAllRoutine();
    }

    @Override
    public Routine findRoutineById(int id) {
        return routineRepository.findRoutineByID(id).get();
    }
}
