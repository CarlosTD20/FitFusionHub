package com.CTornero.FitFusionHub.controller;

import com.CTornero.FitFusionHub.controller.Model.muscle.MuscleListWeb;
import com.CTornero.FitFusionHub.domain.entity.Muscle;
import com.CTornero.FitFusionHub.domain.service.MuscleService;
import com.CTornero.FitFusionHub.http_response.Response;
import com.CTornero.FitFusionHub.mapper.MuscleMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/muscles")
//@CrossOrigin(origins = "http://localhost:4200")
public class MuscleController {

    @Autowired
    MuscleService muscleService;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("")
    public Response getAllMuscles(){
        List<Muscle> muscles = muscleService.getAllMuscles();
        List<MuscleListWeb> muscleListWebs = muscles.stream()
                .map(muscle -> MuscleMapper.mapper.toMuscleListWeb(muscle))
                .toList();
        return new Response(muscleListWebs);
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/{id}")
    public Response findById(@PathVariable("id") int id){
        return new Response(MuscleMapper.mapper.toMuscleDetailWeb(muscleService.findById(id)));
    }
}
