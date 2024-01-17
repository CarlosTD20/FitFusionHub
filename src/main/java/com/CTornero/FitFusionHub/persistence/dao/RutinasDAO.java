package com.CTornero.FitFusionHub.persistence.dao;

import com.CTornero.FitFusionHub.persistence.model.RutinasEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RutinasDAO extends JpaRepository<RutinasEntity, Integer> {

    public List<RutinasEntity> findAll();

    public Optional<RutinasEntity> findByNme(String name);
}