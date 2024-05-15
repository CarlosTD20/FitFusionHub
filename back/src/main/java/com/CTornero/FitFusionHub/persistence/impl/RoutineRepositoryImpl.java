package com.CTornero.FitFusionHub.persistence.impl;

import com.CTornero.FitFusionHub.domain.entity.Routine;
import com.CTornero.FitFusionHub.domain.repository.RoutineRepository;
import com.CTornero.FitFusionHub.mapper.RoutineMapper;
import com.CTornero.FitFusionHub.persistence.dao.RoutineDAO;
import com.CTornero.FitFusionHub.persistence.model.RoutineEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class RoutineRepositoryImpl implements RoutineRepository {

    @Autowired
    RoutineDAO routineDAO;

    @Override
    public void deleteRoutine(Routine routine) {
        routineDAO.delete(RoutineMapper.mapper.toRoutineEntity(routine));
    }

    @Override
    public Routine saveRoutine(Routine routine) {
        RoutineEntity routineEntity = routineDAO.save(RoutineMapper.mapper.toRoutineEntity(routine));
        return RoutineMapper.mapper.toRoutine(routineEntity);
    }

    @Override
    public Routine findByName(String name) {
        return RoutineMapper.mapper.toRoutine(routineDAO.findByName(name));
    }

    @Override
    public List<Routine> getAllRoutine() {
        List<RoutineEntity> routineEntities = routineDAO.findAll();
        return RoutineMapper.mapper.toRoutineList(routineEntities);
    }

    @Override
    public Optional<Routine> findRoutineByID(int id) {
        RoutineEntity routineEntity = routineDAO.findById(id).orElse(null);
        if(routineEntity == null){
            return Optional.empty();
        }
        return Optional.ofNullable(RoutineMapper.mapper.toRoutine(routineEntity));
    }
}
