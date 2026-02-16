

export interface Character {
    id: string;
    nome: string;
    classe: string;
    origem: string;
    img_perfil: string;

    pvMax: number;
    pdMax: number;
    pvAtual: number;
    pdAtual: number;
    nex: number;
    deslocamento: number;
    sanidadeMax: number;
    sanidadeAtual: number;

    defesa: number;
    equipamento: number;
    plusDef: number;
    bloqueio: number;
    esquiva: number;
    
    agilidade: number;
    intelecto: number;
    vigor: number;
    presenca: number;
    forca: number;
}