import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { Http , Response,Headers, RequestOptions} from '@angular/http';
import {Vehicule} from '../model/vehicule.class';
import {Groupe} from '../model/group.class';

@Injectable()
export class VehiculeService {

   constructor(private _http: Http) {
    }
    
private urlApi='http://localhost:8080/groupes/';
private urlApiVehicules='http://localhost:8080/vehicules/';

public vehicules:Vehicule[]=[];

 getGroupsLabel(): Observable<any> {
        return this._http.get(this.urlApi+'minify').map(res => res.json());
    }

  public putVehiculeDTO(vehiculeDTO:any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(vehiculeDTO);
    return this._http.put(this.urlApiVehicules+'listGroups', vehiculeDTO, options).map(res => res.json());
                                                                 }

sendVehiculeDTOWithoutId(dtoToSend: any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(dtoToSend);
    return this._http.post(this.urlApiVehicules+'listGroups',dtoToSend, options).map(res => res.json());
    }

getLisatDTOById(idVehicule:number): Observable<any> {
        return this._http.get(this.urlApi+idVehicule+'/GetDTOGroups').map(res => res.json());
    }

 deleteVehiculeById(id:number): Observable<any> {
        return this._http.delete(this.urlApiVehicules+id).map(res => res.json());
    }



getVehiculesByPageAndSize(page:number,size:number): Observable<any> {
        return this._http.get(this.urlApiVehicules+'list'+'?page='+page+'&size='+size).map(res => res.json());
    }
public addVehicule (vehicule): Observable<any> {
   let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(vehicule);
    return this._http.post(this.urlApiVehicules,vehicule, options).map(res => res.json());
  }

getVehicule(idVehicule: number){
  return this.vehicules.find(vehicule => vehicule.idVehicule === idVehicule);

}


}

