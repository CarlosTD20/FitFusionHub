package com.CTornero.FitFusionHub.domain.service.impl;

import com.CTornero.FitFusionHub.Validation.ValidExerciseList;
import com.CTornero.FitFusionHub.domain.entity.Exercise;
import com.CTornero.FitFusionHub.domain.entity.Routine;
import com.CTornero.FitFusionHub.domain.repository.ExerciseRepository;
import com.CTornero.FitFusionHub.domain.repository.RoutineRepository;
import com.CTornero.FitFusionHub.domain.service.RoutineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static com.CTornero.FitFusionHub.Validation.Validation.validate;

@Service
public class RoutineServiceImpl implements RoutineService {

    @Autowired
    RoutineRepository routineRepository;
    @Autowired
    ExerciseRepository exerciseRepository;

    @Override
    public void deleteRoutine(int routineId) {
        Routine routine = routineRepository.findRoutineByID(routineId).orElseThrow(() -> new RuntimeException("No se ha encontrado la rutina con el id " + routineId));
        routineRepository.deleteRoutine(routine);
    }

    //Validación de lista de duplicados en servicio -> Pasado a etiqueta personalizada
    /*private boolean hasDuplicates(List<Integer> ids) {
        Set<Integer> set = new HashSet<>();
        for (Integer id : ids) {
            if (!set.add(id)) {
                return true; // Se encontró un elemento duplicado
            }
        }
        return false; // No se encontraron elementos duplicados
    }*/

    /*if (hasDuplicates(exerciseListIds)) {
            throw new RuntimeException("La lista de IDs de ejercicio contiene elementos duplicados.");
        }*/

    private Routine save(Routine routine, List<Integer> exerciseListIds){
        Routine existingRoutine = routineRepository.findByName(routine.getName());
        if (existingRoutine != null){
            throw new RuntimeException("La rutina ya existe");
        }
        List<Exercise> exercises = exerciseListIds.stream()
                .map(exerciseID -> exerciseRepository.findById(exerciseID).orElseThrow(() -> new RuntimeException("No se ha encontrado el ejercicio con el id " + exerciseID)))
                .toList();
        routine.setExercise(exercises);
        validate(routine);
        return routineRepository.saveRoutine(routine);
    }

    @Override
    public Routine updateRoutine(Routine routine, List<Integer> exerciseListIds) {
        return save(routine,exerciseListIds);
    }

    @Override
    public Routine insertRoutine(Routine routine, List<Integer> exerciseListIds) {
        return save(routine,exerciseListIds);
    }

    @Override
    public List<Routine> getAllRoutines() {
        return routineRepository.getAllRoutine();
    }

    @Override
    public Routine findRoutineById(int id) {
        return routineRepository.findRoutineByID(id).orElseThrow(() -> new RuntimeException("No se ha encontrado la rutina con el id " + id));
    }
}
