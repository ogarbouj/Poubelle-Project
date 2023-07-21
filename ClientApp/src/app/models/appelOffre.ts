
export interface Offre {
  _id: string;
  titre: string;
  description: string;
  dateDebut: Date;
  dateFin: Date;
  idUser: string;
  statut: string;

}


export interface AppleOffre {
  appelOffre: Offre;
}
