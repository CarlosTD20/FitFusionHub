package com.CTornero.FitFusionHub.persistence.impl;

import com.CTornero.FitFusionHub.domain.entity.Exercise;
import com.CTornero.FitFusionHub.domain.entity.Muscle;
import com.CTornero.FitFusionHub.domain.repository.MuscleRepository;
import com.CTornero.FitFusionHub.mapper.ExerciseMapper;
import com.CTornero.FitFusionHub.mapper.MuscleMapper;
import com.CTornero.FitFusionHub.persistence.dao.ExerciseDAO;
import com.CTornero.FitFusionHub.persistence.dao.MuscleDAO;
import com.CTornero.FitFusionHub.persistence.model.ExerciseEntity;
import com.CTornero.FitFusionHub.persistence.model.MuscleEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class MuscleRepositoryImpl implements MuscleRepository {

    @Autowired
    MuscleDAO muscleDAO;

    @Autowired
    ExerciseDAO exerciseDAO;

    @Override
    public List<Muscle> getAllMuscles() {
        List<MuscleEntity> muscleEntities = muscleDAO.findAll().stream().toList();
        return MuscleMapper.mapper.toMuscleList(muscleEntities);
    }
    @Override
    public Optional<Muscle> findById(int id) {
        Muscle muscle = MuscleMapper.mapper.toMuscle(muscleDAO.findById(id).get());
        return Optional.ofNullable(muscle);
    }
}
