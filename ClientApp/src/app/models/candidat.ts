import { Offre } from "./appelOffre";

export interface Candidat{
  _id: string;
  nom: string;
  email: string;
  numero: string;
  offres: string[];
  user: string[];
  statut: string;
  offreDetails: Offre;

}
