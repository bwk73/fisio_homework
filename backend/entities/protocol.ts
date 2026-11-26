class Protocol {
    public id: number;
    public title: string;
    public start: Date;
    public end:Date;
    public patient_id: number;
    public physio_id: number;
    public sessionsPerWeek: number;
    public active: boolean
    public exercises: Exercise[]

    constructor(id:number, title:string, start: Date, end:Date, patient_id:number, physio_id:number, sessionsPerWeek:number, active:boolean, exercises:Exercise[]) {
        this.id = id
        this.title = title
        this.start = start
        this.end = end
        this.patient_id = patient_id
        this.physio_id = physio_id
        this.sessionsPerWeek = sessionsPerWeek
        this.active = active
        this.exercises = exercises
    } 
}