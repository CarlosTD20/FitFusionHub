package com.CTornero.FitFusionHub.domain.service.impl;

import com.CTornero.FitFusionHub.domain.entity.Exercise;
import com.CTornero.FitFusionHub.domain.repository.ExerciseRepository;
import com.CTornero.FitFusionHub.domain.service.ExerciseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExerciseServiceImpl implements ExerciseService {

    @Autowired
    public ExerciseRepository exerciseRepository;

    @Override
    public List<Exercise> getAllExercise(Integer page, Integer pageSize) {
        return exerciseRepository.getAllExercise(page,pageSize);
    }

    @Override
    public long getTotalNumberOfRecords() {
        return exerciseRepository.getTotalNumberOfRecords();
    }
}
