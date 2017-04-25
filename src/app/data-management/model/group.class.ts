
export class Groupe {
   public idGroupe: number;
   public nom : string;
   public imageUrl : string;
   public vehicules:Vehicule[]=[];
    constructor(groupeId: number,nom : string,imageUrl : string,vehicules:Vehicule[]) {
        this.idGroupe = groupeId;      
        this.nom = nom;
        this.imageUrl=imageUrl;
        this.vehicules=vehicules;
    }

}
