class ProtocolExor {
    public id:number;
    public protocolId: number;
    public exerciseId: number;
    public series: number;
    public reps: number;
    public position: number; 
    public instructions: string;
    public createdAt: string;
    public updatedAt: string;

    constructor(id:number, protocolId:number, exerciseId:number, series:number, reps:number, position:number, instructions:string, createdAt:string, updatedAt:string){
        this.id = id;
        this.protocolId = protocolId;
        this.exerciseId = exerciseId;
        this.series = series;
        this.reps = reps;
        this.position = position;
        this.instructions = instructions;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}