class User {
    private id: string;
    public name: string;
    public email: string;
    private passwordHash: string;
    public role: Role;
    public crefito: string;
    public physioId: string;
    public createdAt: string;
    public updatedAt: string;

    constructor(name:string, email: string, role:Role, crefito:string, physioId:string, createdAt:string, updatedAt:string){
        this.name = name;
        this.email= email;
        this.role = role;
        this.crefito = crefito;
        this.physioId = physioId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}