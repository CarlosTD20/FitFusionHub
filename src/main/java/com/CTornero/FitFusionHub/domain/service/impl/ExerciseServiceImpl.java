package com.CTornero.FitFusionHub.domain.service.impl;

import com.CTornero.FitFusionHub.domain.entity.Exercise;
import com.CTornero.FitFusionHub.domain.entity.Muscle;
import com.CTornero.FitFusionHub.domain.repository.ExerciseRepository;
import com.CTornero.FitFusionHub.domain.repository.MuscleRepository;
import com.CTornero.FitFusionHub.domain.service.ExerciseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExerciseServiceImpl implements ExerciseService {

    @Autowired
    private ExerciseRepository exerciseRepository;
    @Autowired
    private MuscleRepository muscleRepository;

    @Override
    public void deleteExercise(int exerciseId) {
        Exercise exercise = exerciseRepository.findById(exerciseId).get();
        exerciseRepository.deleteExercise(exercise);
    }

    @Override
    public Exercise insertExercise(Exercise exercise, int muscleId) {
        Muscle muscle = muscleRepository.findById(muscleId).get();
        exercise.setMuscle(muscle);
        return exerciseRepository.insertExercise(exercise);
    }

    @Override
    public List<Exercise> getAllExercise(Integer page, Integer pageSize) {
        return exerciseRepository.getAllExercise(page,pageSize);
    }

    @Override
    public Exercise findById(int id) {
        return exerciseRepository.findById(id).get();
    }

    @Override
    public long getTotalNumberOfRecords() {
        return exerciseRepository.getTotalNumberOfRecords();
    }
}
