package com.CTornero.FitFusionHub.mapper;

import com.CTornero.FitFusionHub.controller.Model.muscle.MuscleDetailWeb;
import com.CTornero.FitFusionHub.controller.Model.muscle.MuscleListWeb;
import com.CTornero.FitFusionHub.domain.entity.Muscle;
import com.CTornero.FitFusionHub.persistence.model.MuscleEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MuscleMapper {

    MuscleMapper mapper = Mappers.getMapper(MuscleMapper.class);

    MuscleEntity toMuscleEntity(Muscle muscle);

    @Mapping(target = "exercise", expression = "java(ExerciseMapper.mapper.toExerciseListWebList(muscle.getExercise()))")
    MuscleDetailWeb toMuscleDetailWeb(Muscle muscle);

    List<Muscle> toMuscleList(List<MuscleEntity> muscleEntityList);

    MuscleListWeb toMuscleListWeb(Muscle muscle);

    Muscle toMuscle(MuscleEntity muscleEntity);
}
