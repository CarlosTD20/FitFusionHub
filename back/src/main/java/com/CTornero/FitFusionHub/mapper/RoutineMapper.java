package com.CTornero.FitFusionHub.mapper;

import ch.qos.logback.core.read.ListAppender;
import com.CTornero.FitFusionHub.controller.Model.routine.RoutineCreateWeb;
import com.CTornero.FitFusionHub.controller.Model.routine.RoutineDetailWeb;
import com.CTornero.FitFusionHub.controller.Model.routine.RoutineListWeb;
import com.CTornero.FitFusionHub.controller.Model.routine.RoutineUpdateWeb;
import com.CTornero.FitFusionHub.domain.entity.Routine;
import com.CTornero.FitFusionHub.persistence.model.RoutineEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import javax.swing.*;
import java.util.List;

@Mapper(componentModel = "spring")
public interface RoutineMapper {

    RoutineMapper mapper = Mappers.getMapper(RoutineMapper.class);

    @Mapping(target = "exercise", ignore = true)
    Routine toRoutine(RoutineUpdateWeb routineUpdateWeb);

    @Mapping(target = "exercise", ignore = true)
    Routine toRoutine(RoutineCreateWeb routineCreateWeb);

    @Mapping(target = "exerciseEntity", expression = "java(ExerciseMapper.mapper.toExerciseEntityList(routine.getExercise()))")
    RoutineEntity toRoutineEntity(Routine routine);

    @Mapping(target = "exercise", expression = "java(ExerciseMapper.mapper.toExerciseListWebList(routine.getExercise()))")
    RoutineDetailWeb toRoutineDetailWeb(Routine routine);

    @Mapping(target = "exercise", ignore = true)
    List<Routine> toRoutineList(List<RoutineEntity> routineEntities);

    List<RoutineListWeb> toRoutineListWebList(List<Routine> routines);

    RoutineListWeb toRoutineListWeb(Routine routine);

    @Mapping(target = "exercise", expression = "java(ExerciseMapper.mapper.toExerciseList(routineEntity.getExerciseEntity()))")
    Routine toRoutine(RoutineEntity routineEntity);
}
