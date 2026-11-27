class User {
    private id: string;
    public name: string;
    public email: string;
    private passwordHash: string;
    public role: Role;
    public crefito: string;
    public createdAt: string;

    constructor(id:string, name:string, email: string, passwordHash:string, role:Role, crefito:string, createdAt:string){
        this.id = id;
        this.name = name;
        this.email= email;
        this.passwordHash = passwordHash;
        this.role = role;
        this.crefito = crefito;
        this.createdAt = createdAt;
    }
}