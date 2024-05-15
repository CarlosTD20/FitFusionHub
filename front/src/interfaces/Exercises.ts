// ExerciseInterfaces.ts

import { Muscle } from "./Muscles";

interface ExerciseList {
    data: Exercise[];
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

interface ExerciseMock {
    name: string,
    description: string,
    muscleId: number
}

export type { ExerciseList, Exercise, ExerciseDetail, ExerciseMock };