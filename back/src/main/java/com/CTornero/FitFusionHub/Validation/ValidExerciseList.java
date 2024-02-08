package com.CTornero.FitFusionHub.Validation;


import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.*;

@Target({ElementType.FIELD, ElementType.METHOD, ElementType.PARAMETER})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = ExerciseValidator.class)
@Documented
public @interface ValidExerciseList {

    String field() default ""; // Campo dentro de la clase que contiene la lista de IDs
    String message() default "La lista no debe contener elementos duplicados";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
