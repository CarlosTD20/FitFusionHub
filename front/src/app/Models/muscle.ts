import { Exercise } from "./exercise";

export interface Muslce {
    id: number,
    name: string,
    description: string,
    exercises: Exercise
}