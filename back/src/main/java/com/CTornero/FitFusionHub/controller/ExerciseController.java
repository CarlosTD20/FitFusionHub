package com.CTornero.FitFusionHub.controller;

import com.CTornero.FitFusionHub.controller.Model.exercise.ExerciseCreateWeb;
import com.CTornero.FitFusionHub.controller.Model.exercise.ExerciseDetailWeb;
import com.CTornero.FitFusionHub.controller.Model.exercise.ExerciseListWeb;
import com.CTornero.FitFusionHub.controller.Model.exercise.ExerciseUpdateWeb;
import com.CTornero.FitFusionHub.domain.entity.Exercise;
import com.CTornero.FitFusionHub.domain.service.ExerciseService;
import com.CTornero.FitFusionHub.http_response.Response;
import com.CTornero.FitFusionHub.mapper.ExerciseMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/exercises")
//@CrossOrigin(origins = "http://localhost:4200")
public class ExerciseController {

    @Value("${LIMIT}")
    private Integer LIMIT;


    @Autowired
    private ExerciseService exerciseService;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("")
    public Response getAllExercise(@RequestParam(required = false) Integer page, @RequestParam(required = false) Integer pageSize){
        pageSize = (pageSize != null)? pageSize : LIMIT;
        long totalRecords = exerciseService.getTotalNumberOfRecords();

        List<Exercise> exercises =  exerciseService.getAllExercise(page,pageSize);
        List<ExerciseListWeb> exerciseListWebs =exercises.stream()
                .map(exercise -> ExerciseMapper.mapper.toExerciseListWeb(exercise))
                .toList();

        return new Response(exerciseListWebs);
        // return new Response(exerciseListWebs,Math.toIntExact(totalRecords),page,pageSize);
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/{id}")
    public Response findById(@PathVariable("id") int id){
        return new Response(ExerciseMapper.mapper.toExerciseDetailWeb(exerciseService.findById(id)));
    }

    @ResponseStatus(HttpStatus.ACCEPTED)
    @PostMapping()
    public Response insertExercise(@RequestBody ExerciseCreateWeb exerciseCreateWeb){
        Exercise exercise = exerciseService.insertExercise(ExerciseMapper.mapper.toExercise(exerciseCreateWeb), exerciseCreateWeb.getMuscleId());
        return new Response(ExerciseMapper.mapper.toExerciseDetailWeb(exercise));
    }

    @ResponseStatus(HttpStatus.ACCEPTED)
    @PutMapping("/{id}")
    public Response updateExercise(@PathVariable("id") int id, @RequestBody ExerciseUpdateWeb exerciseUpdateWeb){
        exerciseUpdateWeb.setId(id);
        Exercise exercise = exerciseService.updateExercise(ExerciseMapper.mapper.toExercise(exerciseUpdateWeb), exerciseUpdateWeb.getMuscleId());
        return new Response(ExerciseMapper.mapper.toExerciseDetailWeb(exercise));
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void deleteExercise(@PathVariable("id") int exerciseId){
       exerciseService.deleteExercise(exerciseId);
    }
}
