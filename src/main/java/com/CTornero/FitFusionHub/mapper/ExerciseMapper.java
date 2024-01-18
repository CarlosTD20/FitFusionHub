package com.CTornero.FitFusionHub.mapper;

import com.CTornero.FitFusionHub.controller.Model.exercise.ExerciseListWeb;
import com.CTornero.FitFusionHub.domain.entity.Exercise;
import com.CTornero.FitFusionHub.persistence.model.ExerciseEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ExerciseMapper {

    ExerciseMapper mapper = Mappers.getMapper(ExerciseMapper.class);

    @Mapping(target = "muscle", ignore = true)
    List<Exercise> toExerciseList(List<ExerciseEntity> exerciseEntities);

    @Mapping(target = "muscle", ignore = true)
    Exercise toExercise(ExerciseEntity exerciseEntity);

    ExerciseListWeb toExerciseListWeb(Exercise exercise);
}
