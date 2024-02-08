package com.CTornero.FitFusionHub.persistence.dao;

import com.CTornero.FitFusionHub.domain.entity.Exercise;
import com.CTornero.FitFusionHub.persistence.model.ExerciseEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ExerciseDAO extends JpaRepository<ExerciseEntity, Integer> {

    //Listado de ejercicio por gurpo muscular
    public List<ExerciseEntity> findByMuscleEntityId(int id);

    public ExerciseEntity findByName(String name);
}
