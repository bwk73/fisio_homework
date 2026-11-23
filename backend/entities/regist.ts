class Registro {
    public id: number;
    public exor_id: number;
    public data: Date;
    public concluido: boolean;
    public observacao: string;

    constructor(id:number, exor_id:number, data:Date, concluido:boolean, observacao:string) {
        this.id = id;
        this.exor_id = exor_id;
        this.data = data;
        this.concluido = concluido;
        this.observacao = observacao;
    }
}