import { Muslce } from "./muscle";

export interface Exercise {
    id: number,
    name: string,
    desciption: string,
    muscles: Muslce
}