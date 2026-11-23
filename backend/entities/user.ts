abstract class User {
    private id: number;
    public nome: string;
    public email: string|null;
    private senha_hash: string;


    constructor(nome:string, email: string){
        this.id = 0;
        this.nome = nome;
        this.email= email;
        this.senha_hash = ""; 
    }

    abstract cadastrar(): void;
}