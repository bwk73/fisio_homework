class ExecutionRecord {
    public id: number
    public exercise_id: number
    public date: Date
    public completed: boolean
    public pain: number

    constructor(id:number, exercise_id:number, date:Date, completed:boolean, pain:number) {
        this.id = id
        this.exercise_id = exercise_id
        this.date = date
        this.completed = completed
        this.pain = pain
    }
}