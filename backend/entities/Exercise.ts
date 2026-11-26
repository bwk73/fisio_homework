class Exercise {
    public id: number
    public name: string
    public protocol_id: number
    public record_id : number
    public protocols: Protocol[]

    constructor(id:number, name:string, protocol_id:number, record_id:number, protocols:Protocol[]) {
        this.id = id
        this.name = name
        this.protocol_id = protocol_id
        this.record_id = record_id
        this.protocols = protocols
    }
}