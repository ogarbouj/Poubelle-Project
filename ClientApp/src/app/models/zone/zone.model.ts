export class Zone {
    _id?: string;
    nom: string;
    latitude: number;
    longitude: number;
  
    constructor(nom: string, latitude: number, longitude: number) {
      this.nom = nom;
      this.latitude = latitude;
      this.longitude = longitude;
    }
  }