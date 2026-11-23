class Protocol {
    public id: number;
    public pcte_id: number;
    public fisio_id: number;
    public titulo: string;
    public inicio: Date;
    public fim:Date;
    public ativo: boolean;
    public exors: string[];

    constructor(id:number, pcte_id:number, fisio_id:number, titulo:string, inicio: Date, fim:Date, ativo:boolean, exors:string[]) {
        this.id = id;
        this.pcte_id = pcte_id;
        this.fisio_id = fisio_id;
        this.titulo = titulo;
        this.inicio = inicio;
        this.fim = fim;
        this.ativo = ativo;
        this.exors = exors;
    }
    
}