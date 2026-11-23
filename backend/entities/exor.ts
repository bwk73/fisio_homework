class Exor {
    public id: number;
    public nome: string;
    public protocol_id: number;
    public series: number;
    public reps: number;
    public ordem: number;
    public registro_id : number;

    constructor(id:number, nome:string, protocol_id:number, series:number, reps:number, ordem:number, registro_id:number) {
        this.id = id;
        this.nome = nome;
        this.protocol_id = protocol_id;
        this.series = series;
        this.reps = reps;
        this.ordem = ordem;
        this.registro_id = registro_id;
    }
}