class Protocol {
    public id: number;
    public title: string;
    public startDate: string;
    public endDate:string|null;
    public patientId: number;
    public physioId: number;
    public sessionsPerWeek: number;
    public createdAt: string;
    public archivedAt: string|null;
    public updatedAt: string;

    constructor(id:number, title:string, startDate: string, endDate:string, patientId:number, physioId:number, sessionsPerWeek:number, createdAt:string, archivedAt:string, updatedAt:string) {
        this.id = id;
        this.title = title;
        this.startDate = startDate;
        this.endDate = null;
        this.patientId = patientId;
        this.physioId = physioId;
        this.sessionsPerWeek = sessionsPerWeek;
        this.createdAt = createdAt;;
        this.archivedAt = null;
        this.updatedAt = updatedAt;
    } 
}