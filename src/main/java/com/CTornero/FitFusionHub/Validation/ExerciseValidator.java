package com.CTornero.FitFusionHub.Validation;

import com.CTornero.FitFusionHub.domain.entity.Exercise;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class ExerciseValidator implements ConstraintValidator<ValidExerciseList, Object> {

    private String field;

    @Override
    public void initialize(ValidExerciseList constraintAnnotation) {
        ConstraintValidator.super.initialize(constraintAnnotation);
    }

    @Override
    public boolean isValid(Object object, ConstraintValidatorContext context) {
        if (object == null) {
            return true; // La validación pasa si el objeto es nulo
        }

        try {
            List<Exercise> list = (List<Exercise>) object;
            Set<Integer> set = new HashSet<>();
            for (Exercise exercise : list) {
                Integer id = exercise.getId(); // Asume que tienes un método getId() en tu clase Exercise
                if (!set.add(id)) {
                    return false; // Se encontró un elemento duplicado
                }
            }
            return true; // No se encontraron elementos duplicados
        } catch (ClassCastException e) {
            throw new IllegalArgumentException("El campo especificado no es una lista de Exercise");
        }
    }


}
