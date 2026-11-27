class ConsentRecord {
    public id: number;
    public userId: number;
    public versionOfTheTerm: string;
    public acceptanceDate: string;

    constructor(id:number, userId:number, versionOfTheTerm:string, acceptanceDate:string){
        this.id = id;
        this.userId = userId;
        this.versionOfTheTerm = versionOfTheTerm;
        this.acceptanceDate = acceptanceDate;
    }
}