export interface Routine {
    id: number,
    name: string,
    description: string,
    exercises: [
        id: number,
        name: string
    ]
}