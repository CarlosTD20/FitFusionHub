package com.CTornero.FitFusionHub.domain.service.impl;

import com.CTornero.FitFusionHub.domain.entity.Exercise;
import com.CTornero.FitFusionHub.domain.entity.Muscle;
import com.CTornero.FitFusionHub.domain.repository.ExerciseRepository;
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
    @Autowired
    private ExerciseRepository exerciseRepository;

    @Override
    public List<Muscle> getAllMuscles() {
        return muscleRepository.getAllMuscles();
    }
    @Override
    public Muscle findById(int id) {
        List<Exercise> exercises = exerciseRepository.findByMuscleId(id);
        Muscle muscle = muscleRepository.findById(id).orElseThrow(() -> new RuntimeException("No se ha encontrado el músculo con el id " + id));
        muscle.setExercise(exercises);
        return muscle;
    }
}
