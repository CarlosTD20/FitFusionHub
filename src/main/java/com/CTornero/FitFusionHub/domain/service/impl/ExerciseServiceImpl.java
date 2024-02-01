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
        Exercise exercise = exerciseRepository.findById(exerciseId).orElseThrow(() -> new RuntimeException("No se ha encontrado el ejercicio con el id " + exerciseId));
        exerciseRepository.deleteExercise(exercise);
    }

    @Override
    public Exercise updateExercise(Exercise exercise, int muscleId) {
        Muscle muscle = muscleRepository.findById(muscleId).orElseThrow(() -> new RuntimeException("No se ha encontrado el músculo con el id " + muscleId));
        exercise.setMuscle(muscle);
        return exerciseRepository.updateExercise(exercise);
    }

    @Override
    public Exercise insertExercise(Exercise exercise, int muscleId) {
        Muscle muscle = muscleRepository.findById(muscleId).orElseThrow(() -> new RuntimeException("No se ha encontrado el músculo con el id " + muscleId));
        exercise.setMuscle(muscle);
        return exerciseRepository.insertExercise(exercise);
    }

    @Override
    public List<Exercise> getAllExercise(Integer page, Integer pageSize) {
        return exerciseRepository.getAllExercise(page,pageSize);
    }

    @Override
    public Exercise findById(int id) {
        return exerciseRepository.findById(id).orElseThrow(() -> new RuntimeException("No se ha encontrado el ejercicio con el id " + id));
    }

    @Override
    public long getTotalNumberOfRecords() {
        return exerciseRepository.getTotalNumberOfRecords();
    }
}
