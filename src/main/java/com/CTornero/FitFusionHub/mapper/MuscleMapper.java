package com.CTornero.FitFusionHub.mapper;

import com.CTornero.FitFusionHub.controller.Model.muscle.MuscleListWeb;
import com.CTornero.FitFusionHub.domain.entity.Muscle;
import com.CTornero.FitFusionHub.persistence.model.MuscleEntity;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface MuscleMapper {

    MuscleMapper mapper = Mappers.getMapper(MuscleMapper.class);

    Muscle toMuscle(MuscleEntity muscle);

    MuscleListWeb toMuscleListWeb(Muscle muscle);
}
