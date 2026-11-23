class ProtocolExor {
    public id: number;
    public protocol_id: number;
    public exor_id: number;
    public series: number;
    public reps: number;
    public ordem: number;

    constructor(id:number, protocol_id:number, exor_id:number, series:number, reps:number, ordem:number){
        this.id = id;
        this.protocol_id = protocol_id;
        this.exor_id = exor_id;
        this.series = series;
        this.reps = reps;
        this.ordem = ordem;
    }
}