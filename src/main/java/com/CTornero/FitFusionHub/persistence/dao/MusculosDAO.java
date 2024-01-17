package com.CTornero.FitFusionHub.persistence.dao;

import com.CTornero.FitFusionHub.persistence.model.MusculosEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MusculosDAO extends JpaRepository<MusculosEntity, Integer> {

    public List<MusculosEntity> findAll();


}
