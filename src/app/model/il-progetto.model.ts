export class Proj {
    id: number;
    codProgetto: String;
    descProgetto: String;
    nomePM: String;
    effort: number;
    dataInizio: Date;
    dataFine: Date;
}


export class ProjListItem {
    _embedded: { proj: Proj[] };
    _links: any;
    page: Page;
}


export class Page {
    size: 30;
    totalElements: number;
    totalPages: number;
    number: number;
}
