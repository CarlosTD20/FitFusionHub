package com.CTornero.FitFusionHub.controller;

import com.CTornero.FitFusionHub.controller.Model.routine.RoutineCreateWeb;
import com.CTornero.FitFusionHub.controller.Model.routine.RoutineListWeb;
import com.CTornero.FitFusionHub.controller.Model.routine.RoutineUpdateWeb;
import com.CTornero.FitFusionHub.domain.entity.Routine;
import com.CTornero.FitFusionHub.domain.service.RoutineService;
import com.CTornero.FitFusionHub.http_response.Response;
import com.CTornero.FitFusionHub.mapper.RoutineMapper;
import org.apache.catalina.LifecycleState;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/routines")
//@CrossOrigin(origins = "http://localhost:4200")
public class RoutineController {

    @Autowired
    RoutineService routineService;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("")
    public Response getAllRoutines(){
        List<Routine> routines = routineService.getAllRoutines();
        List<RoutineListWeb> routineListWebs = routines.stream()
                .map(routine -> RoutineMapper.mapper.toRoutineListWeb(routine))
                .toList();
        return new Response(routineListWebs);
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/{id}")
    public Response findRouitneById(@PathVariable("id") int id){
        return new Response(RoutineMapper.mapper.toRoutineDetailWeb(routineService.findRoutineById(id)));
    }

    @ResponseStatus(HttpStatus.ACCEPTED)
    @PostMapping()
    public Response insertRoutine(@RequestBody RoutineCreateWeb routineCreateWeb){
        Routine routine = routineService.insertRoutine(RoutineMapper.mapper.toRoutine(routineCreateWeb),routineCreateWeb.getExerciseId());
        return new Response(RoutineMapper.mapper.toRoutineDetailWeb(routine));
    }

    @ResponseStatus(HttpStatus.ACCEPTED)
    @PutMapping("/{id}")
    public Response updateRoutine(@PathVariable("id") int id, @RequestBody RoutineUpdateWeb routineUpdateWeb){
        routineUpdateWeb.setId(id);
        Routine routine = routineService.updateRoutine(RoutineMapper.mapper.toRoutine(routineUpdateWeb),routineUpdateWeb.getExerciseId());
        return new Response(RoutineMapper.mapper.toRoutineDetailWeb(routine));
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void deleteRoutine(@PathVariable("id") int routineId){
        routineService.deleteRoutine(routineId);
    }
}
