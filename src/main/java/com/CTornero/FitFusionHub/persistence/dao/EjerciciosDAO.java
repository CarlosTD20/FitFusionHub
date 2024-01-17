package com.CTornero.FitFusionHub.persistence.dao;

import com.CTornero.FitFusionHub.persistence.model.EjerciciosEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EjerciciosDAO extends JpaRepository<EjerciciosEntity, Integer> {

    public List<EjerciciosEntity> findAll();

    public Optional<EjerciciosEntity> findByEjercicioId(int id);

    //Listado de ejercicio por gurpo muscular
    public List<EjerciciosEntity> findByMusculosEntityId(int id);
}
