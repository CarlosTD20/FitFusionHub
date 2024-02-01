package com.CTornero.FitFusionHub.mapper;

import com.CTornero.FitFusionHub.controller.Model.exercise.ExerciseCreateWeb;
import com.CTornero.FitFusionHub.controller.Model.exercise.ExerciseDetailWeb;
import com.CTornero.FitFusionHub.controller.Model.exercise.ExerciseListWeb;
import com.CTornero.FitFusionHub.controller.Model.exercise.ExerciseUpdateWeb;
import com.CTornero.FitFusionHub.domain.entity.Exercise;
import com.CTornero.FitFusionHub.persistence.model.ExerciseEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ExerciseMapper {

    ExerciseMapper mapper = Mappers.getMapper(ExerciseMapper.class);

    @Mapping(target = "muscleEntity", ignore = true)
    List<ExerciseEntity> toExerciseEntityList(List<Exercise> exercises);

    @Mapping(target = "muscle", ignore = true)
    Exercise toExercise(ExerciseUpdateWeb exerciseUpdateWeb);

    @Mapping(target = "muscle", ignore = true)
    Exercise toExercise(ExerciseCreateWeb exerciseCreateWeb);

    @Mapping(target = "muscleEntity", expression = "java(MuscleMapper.mapper.toMuscleEntity(exercise.getMuscle()))")
    ExerciseEntity toExerciseEntity(Exercise exercise);

    @Mapping(target = "muscle", ignore = true)
    List<Exercise> toExerciseList(List<ExerciseEntity> exerciseEntities);

    @Mapping(target = "muscle", expression = "java(MuscleMapper.mapper.toMuscle(exerciseEntity.getMuscleEntity()))")
    Exercise toExercise(ExerciseEntity exerciseEntity);

    ExerciseListWeb toExerciseListWeb(Exercise exercise);

    List<ExerciseListWeb> toExerciseListWebList(List<Exercise> exercises);

    @Mapping(target = "muscle", expression = "java(MuscleMapper.mapper.toMuscleListWeb(exercise.getMuscle()))")
    ExerciseDetailWeb toExerciseDetailWeb(Exercise exercise);
}
