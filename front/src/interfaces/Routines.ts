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
    exerciseList: Exercise[];
}

export type { RoutineList, Routine, RoutineDetail };