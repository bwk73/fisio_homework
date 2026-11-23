class Pcte extends User {
    public cpf: string;
    public fisio: string;
    public protocolos : string[];

    constructor(nome:string, email:string, cpf:string, fisio: string, protocolos:string[]){
        super(nome, email);
        this.cpf = cpf;
        this.fisio = fisio;
        this.protocolos = protocolos;
    }

    cadastrar():void {
        console.log("Paciente cadastrado com sucesso.")
    }
}