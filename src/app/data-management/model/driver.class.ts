export class Driver {
   public idDriver: number;
   public code: number;
   public firstName : string;
   public lastName : string;
   public telephone : string;
   public cin : string;
   public email : string;

  constructor(code: number,firstName : string,lastName : string
      ,telephone : string,cin : string,email : string) {
      
        this.code = code;      
        this.firstName = firstName;
        this.lastName = lastName;
        this.telephone = telephone;
        this.cin=cin;
        this.email=email;    
    }
}