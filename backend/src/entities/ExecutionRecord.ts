class ExecutionRecord {
    public id: number;
    public protocolExerciseId: number;
    public performedOn: string;
    public completed: boolean;
    public pain: number|null;

    constructor(id:number, protocolExerciseId:number, performedOn:string, completed:boolean, pain:number) {
        this.id = id;
        this.protocolExerciseId = protocolExerciseId;
        this.performedOn = performedOn;
        this.completed = completed;
        this.pain = null;
    }
}