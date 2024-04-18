// ExerciseInterfaces.ts

import { Muscle } from "./Muscles";

interface ExerciseList {
    data: [];
}

interface Exercise {
    id: number;
    name: string;
}

interface ExerciseDetail {
    id: number;
    name: string;
    description: string;
    muscle: Muscle
}

interface ExerciseInsert {
    name: string,
    description: string,
    muscleId: number
}

export type { ExerciseList, Exercise, ExerciseDetail, ExerciseInsert };