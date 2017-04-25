import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { Http , Response,Headers, RequestOptions} from '@angular/http';
import {Vehicule} from '../model/vehicule.class';
import {Groupe} from '../model/group.class';

@Injectable()
export class GroupService {

   constructor(private _http: Http) {
    }
private urlApi='http://localhost:8080/groupes/';
private urlApiVehicules='http://localhost:8080/vehicules/';
public groups:Groupe[]=[];

      getGroupsByPageAndSize(page:number,size:number): Observable<any> {
        return this._http.get(this.urlApi+'list'+'?page='+page+'&size='+size).map(res => res.json());
    }

      getVehiculesMatricules(): Observable<any> {
        return this._http.get(this.urlApiVehicules+'minify').map(res => res.json());
    }

   sendVehiculesDTO(dtoToSend: any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(dtoToSend);
    return this._http.post(this.urlApi+'listVehicules',dtoToSend, options).map(res => res.json());
    }

    deleteGroupById(id:number): Observable<any> {
        return this._http.delete(this.urlApi+id).map(res => res.json());
    }
     
    public putGroupDTO(groupDto:any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(groupDto);
    return this._http.put(this.urlApi+'listVehicules', groupDto, options).map(res => res.json());
                                                                 }
public addGroup (group): Observable<any> {
   let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(group);
    return this._http.post(this.urlApi,group, options).map(res => res.json());
  }                                                                 

getGroup(idGroupe: number){
  return this.groups.find(group => group.idGroupe === idGroupe);

}


}

