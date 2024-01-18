package com.CTornero.FitFusionHub.persistence.dao;

import com.CTornero.FitFusionHub.persistence.model.ExerciseEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ExerciseDAO extends JpaRepository<ExerciseEntity, Integer> {

    public List<ExerciseEntity> findAll();

    public Optional<ExerciseEntity> findById(int id);

    //Listado de ejercicio por gurpo muscular
    public List<ExerciseEntity> findByMuscleEntityId(int id);
}
