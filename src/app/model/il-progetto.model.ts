export class Proj {
    id: number;
    c_proj: String;
    d_proj: String;
    nome_pm: String;
    effort: number;
    d_inizio: Date;
    d_fine: Date;
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
