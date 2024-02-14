import { MuscleDetail } from "./muscle";

export interface ExerciseList {
    id: number,
    name: string,
}

export interface ExerciseDetail{
    id: number,
    name: string,
    description: string,
    muscle: MuscleDetail
}