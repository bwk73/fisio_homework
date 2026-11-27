class ExecutionRecord {
    public id: number;
    public protocolExerciseId: number;
    public performedOn: string;
    public completed: boolean;
    public pain: number|null;
    public createdAt: string;
    public updatedAt: string;

    constructor(id:number, protocolExerciseId:number, performedOn:string, completed:boolean, pain:number, createdAt:string, updatedAt:string) {
        this.id = id;
        this.protocolExerciseId = protocolExerciseId;
        this.performedOn = performedOn;
        this.completed = completed;
        this.pain = null;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}