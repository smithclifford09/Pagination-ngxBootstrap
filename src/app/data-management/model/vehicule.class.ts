export class Vehicule {
   public idVehicule: number;
    public matricule : string;
   public mark : string;
    constructor(idVehicule: number,matricule : string,mark : string) {
        this.idVehicule = idVehicule;      
        this.matricule = matricule;
        this.mark=mark;
    }

}