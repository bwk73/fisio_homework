class Protocol {
    public id: number;
    public title: string;
    public startDate: string;
    public endDate:string|null;
    public patientId: number;
    public physioId: number;
    public sessionsPerWeek: number;
    public exercises: Exercise[];
    public createdAt: string;
    public archivedAt: string|null;

    constructor(id:number, title:string, startDate: string, endDate:string, patientId:number, physioId:number, sessionsPerWeek:number, exercises:Exercise[], createdAt:string, archivedAt:string) {
        this.id = id;
        this.title = title;
        this.startDate = startDate;
        this.endDate = null;
        this.patientId = patientId;
        this.physioId = physioId;
        this.sessionsPerWeek = sessionsPerWeek;
        this.exercises = exercises;
        this.createdAt = createdAt;;
        this.archivedAt = null;
    } 
}