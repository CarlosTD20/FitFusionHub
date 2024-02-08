package com.CTornero.FitFusionHub.domain.service;

import com.CTornero.FitFusionHub.domain.entity.Exercise;

import java.util.List;

public interface ExerciseService {
    public void deleteExercise(int exerciseId);
    public Exercise updateExercise(Exercise exercise, int muscleId);
    public Exercise insertExercise(Exercise exercise, int muscleId);
    public List<Exercise> getAllExercise(Integer page, Integer pageSize);
    public Exercise findById(int id);
    public long getTotalNumberOfRecords();
}
