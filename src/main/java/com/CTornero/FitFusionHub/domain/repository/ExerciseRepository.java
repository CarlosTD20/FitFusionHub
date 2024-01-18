package com.CTornero.FitFusionHub.domain.repository;

import com.CTornero.FitFusionHub.domain.entity.Exercise;

import java.util.List;

public interface ExerciseRepository {

    public List<Exercise> getAllExercise(Integer page, Integer pageSize);

    public long getTotalNumberOfRecords();
}
