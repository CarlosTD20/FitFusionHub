package com.CTornero.FitFusionHub.domain.service.impl;

import com.CTornero.FitFusionHub.domain.entity.Muscle;
import com.CTornero.FitFusionHub.domain.repository.MuscleRepository;
import com.CTornero.FitFusionHub.domain.service.MuscleService;
import com.CTornero.FitFusionHub.persistence.impl.MuscleRepositoryImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MuscleServiceImpl implements MuscleService {

    @Autowired
    private MuscleRepository muscleRepository;

    @Override
    public List<Muscle> getAllMuscles() {
        return muscleRepository.getAllMuscles();
    }

    @Override
    public Muscle findExerciseByMuscleId(int id) {
        return muscleRepository.findExerciseByMuscleId(id).get();
    }
}
