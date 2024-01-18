package com.CTornero.FitFusionHub.persistence.dao;

import com.CTornero.FitFusionHub.persistence.model.MuscleEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MuscleDAO extends JpaRepository<MuscleEntity, Integer> {

    public List<MuscleEntity> findAll();


}
