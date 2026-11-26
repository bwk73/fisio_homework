class ProtocolExor {
    public id:number
    public protocol_id: number
    public exercise_id: number
    public series: number
    public reps: number
    public sequence: number
    public instruction: string

    constructor(id:number, protocol_id:number, exercise_id:number, series:number, reps:number, sequence:number, instruction:string){
        this.id = id
        this.protocol_id = protocol_id
        this.exercise_id = exercise_id
        this.series = series
        this.reps = reps
        this.sequence = sequence
        this.instruction = instruction
    }
}