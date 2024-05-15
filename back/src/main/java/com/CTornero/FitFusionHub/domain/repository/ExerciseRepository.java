package com.CTornero.FitFusionHub.domain.repository;

import com.CTornero.FitFusionHub.domain.entity.Exercise;

import java.util.List;
import java.util.Optional;

public interface ExerciseRepository {

    public void deleteExercise(Exercise exercise);
    public Exercise saveExercise(Exercise exercise);
    public List<Exercise> getAllExercise(Integer page, Integer pageSize);
    public Optional<Exercise> findById(int id);
    public Exercise findByName(String name);
    public List<Exercise> findByMuscleId(int muscleId);
    public long getTotalNumberOfRecords();
}
