class Fisio extends User {
    public crefito: string;
    private pctes: string[];
    public protocolos: string[];

    constructor(nome:string, email:string, crefito:string, pctes:string[], protocolos:string[]){
        super(nome, email);
        this.crefito = crefito;
        this.pctes = [];
        this.protocolos = [];
    }

    cadastrar():void{
        console.log("Fisioterapeuta cadastrado com sucesso.")
    }
}