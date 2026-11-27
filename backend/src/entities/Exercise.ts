class Exercise {
    public id: number;
    public name: string;
    public description: string;
    public externalId: number;  // número do exercício na base do wger
    public source: string;      // diz se ele foi criado por mim ou importado 
    public createdAt: string;
    public updatedAt: string;

    constructor(id:number, name:string, description:string, externalId:number, source:string, createdAt:string, updatedAt:string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.externalId = externalId;
        this.source = source;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}