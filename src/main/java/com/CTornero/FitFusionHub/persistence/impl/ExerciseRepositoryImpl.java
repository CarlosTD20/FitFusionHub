package com.CTornero.FitFusionHub.persistence.impl;

import com.CTornero.FitFusionHub.domain.entity.Exercise;
import com.CTornero.FitFusionHub.domain.repository.ExerciseRepository;
import com.CTornero.FitFusionHub.mapper.ExerciseMapper;
import com.CTornero.FitFusionHub.persistence.dao.ExerciseDAO;
import com.CTornero.FitFusionHub.persistence.model.ExerciseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ExerciseRepositoryImpl implements ExerciseRepository {

    @Autowired
    ExerciseDAO exerciseDAO;

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
    public long getTotalNumberOfRecords() {
       return exerciseDAO.count();
    }
}
