export class Poubelle{
    _id:string;
    idType: {
        _id: string;
        nom: string;
    }
    idZone : {
        _id: string;
        nom: string;
    }
    nom:string;
    capacite:number;
    taille:string;
    statut:string;
}