class ConsentRecord {
    public id: number;
    public userId: number;
    public termVersion: string;
    public acceptanceDate: string;
    public createdAt: string;
    public updatedAt: string;


    constructor(id:number, userId:number, termVersion:string, acceptanceDate:string, createdAt:string, updatedAt:string){
        this.id = id;
        this.userId = userId;
        this.termVersion = termVersion;
        this.acceptanceDate = acceptanceDate;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}