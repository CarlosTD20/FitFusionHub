package com.CTornero.FitFusionHub.persistence.impl;

import com.CTornero.FitFusionHub.domain.entity.Exercise;
import com.CTornero.FitFusionHub.domain.repository.ExerciseRepository;
import com.CTornero.FitFusionHub.mapper.ExerciseMapper;
import com.CTornero.FitFusionHub.persistence.dao.ExerciseDAO;
import com.CTornero.FitFusionHub.persistence.model.ExerciseEntity;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class ExerciseRepositoryImpl implements ExerciseRepository {

    @Autowired
    ExerciseDAO exerciseDAO;

    @Override
    public void deleteExercise(Exercise exercise) {
        exerciseDAO.delete(ExerciseMapper.mapper.toExerciseEntity(exercise));
    }

    @Override
    @Transactional
    public Exercise saveExercise(Exercise exercise) {
        ExerciseEntity exerciseEntity = exerciseDAO.save(ExerciseMapper.mapper.toExerciseEntity(exercise));
        return ExerciseMapper.mapper.toExercise(exerciseEntity);
    }

    public List<Exercise> getAllExercise(Integer page, Integer pageSize){
        List<ExerciseEntity> exerciseEntityList;
        if (page != null && page > 0){
            Pageable pageable = PageRequest.of(page -1, pageSize);
            exerciseEntityList = exerciseDAO.findAll(pageable).stream().toList();
        }else{
            exerciseEntityList = exerciseDAO.findAll();
        }
        return ExerciseMapper.mapper.toExerciseList(exerciseEntityList);
    }

    @Override
    public Optional<Exercise> findById(int id) {
        //return Optional.ofNullable(ExerciseMapper.mapper.toExercise(exerciseDAO.findById(id).get()));
        ExerciseEntity exerciseEntity = exerciseDAO.findById(id).orElse(null);
        if (exerciseEntity == null) {
            return Optional.empty();
        }
        return Optional.ofNullable(ExerciseMapper.mapper.toExercise(exerciseEntity));
    }

    @Override
    public Exercise findByName(String name) {
        return ExerciseMapper.mapper.toExercise(exerciseDAO.findByName(name));
    }

    @Override
    public List<Exercise> findByMuscleId(int muscleId) {
        return ExerciseMapper.mapper.toExerciseList(exerciseDAO.findByMuscleEntityId(muscleId));
    }

    @Override
    public long getTotalNumberOfRecords() {
       return exerciseDAO.count();
    }
}
