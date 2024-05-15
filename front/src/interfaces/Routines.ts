// RoutineInterfaces.ts

import { Exercise } from "./Exercises";

interface RoutineList {
    data: Routine[];
}

interface Routine {
    id: number;
    name: string;
}

interface RoutineDetail {
    id: number;
    name: string;
    description: string;
    exercise: Exercise[];
}

interface RoutineMock {
    name: string,
    description: string,
    exerciseId: number[]
}

export type { RoutineList, Routine, RoutineDetail, RoutineMock };