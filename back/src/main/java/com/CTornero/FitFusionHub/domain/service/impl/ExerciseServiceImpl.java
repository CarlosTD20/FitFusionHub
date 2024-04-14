package com.CTornero.FitFusionHub.domain.service.impl;

import com.CTornero.FitFusionHub.domain.entity.Exercise;
import com.CTornero.FitFusionHub.domain.entity.Muscle;
import com.CTornero.FitFusionHub.domain.repository.ExerciseRepository;
import com.CTornero.FitFusionHub.domain.repository.MuscleRepository;
import com.CTornero.FitFusionHub.domain.service.ExerciseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.CTornero.FitFusionHub.Validation.Validation.validate;

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

    private Exercise save(Exercise exercise, int muscleId){
        Exercise existingExercise = exerciseRepository.findByName(exercise.getName());
        if (existingExercise != null){
            throw new RuntimeException("El ejercicio ya existe");
        }

        Muscle muscle = muscleRepository.findById(muscleId).orElseThrow(() -> new RuntimeException("No se ha encontrado el músculo con el id " + muscleId));
        exercise.setMuscle(muscle);
        validate(exercise);
        return exerciseRepository.saveExercise(exercise);
    }

    @Override
    public Exercise updateExercise(Exercise exercise, int muscleId) {
        return save(exercise,muscleId);
    }

    @Override
    public Exercise insertExercise(Exercise exercise, int muscleId) {
        return save(exercise,muscleId);
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
