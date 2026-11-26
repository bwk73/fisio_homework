class User {
    private id: number;
    public name: string;
    public email: string|null;
    private passwordHash: string;
    public role: string;
    public crefito: string;
    public physioId: number;
    public physio: User;
    public patients: User[];
    public protocols: Protocol[];


    constructor(id:number, name:string, email: string, passwordHash:string, role:string, crefito:string, physioId:number, physio:User, patients:User[], protocols:Protocol[]){
        this.id = 0;
        this.name = name;
        this.email= email;
        this.passwordHash = "";
        this.role = role;
        this.crefito = crefito;
        this.physioId = physioId;
        this.physio = physio;
        this.patients = patients;
        this.protocols = protocols;
    }
}