import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { Http , Response,Headers, RequestOptions} from '@angular/http';
import {Vehicule} from '../model/vehicule.class';
import {Driver} from '../model/driver.class';

@Injectable()
export class DriverService {

   constructor(private _http: Http) {
    }
private urlApi='http://localhost:8080/groupes/';
private urlApiVehicules='http://localhost:8080/vehicules/';
private urlApiDrivers='http://localhost:8080/drivers/';

public drivers:Driver[]=[];


      getDriversByPageAndSize(page:number,size:number): Observable<any> {
        return this._http.get(this.urlApiDrivers+'list'+'?page='+page+'&size='+size).map(res => res.json());
    }

      getVehiculesMatricules(): Observable<any> {
        return this._http.get(this.urlApiVehicules+'minify').map(res => res.json());
    }   
    getVehiculeMatricule(idDriver): Observable<any> {
        return this._http.get(this.urlApiDrivers+idDriver+'/matricule').map(res => res.json());
    }


    deleteDriverById(id:number): Observable<any> {
        return this._http.delete(this.urlApiDrivers+id).map(res => res.json());
    }
     
    public putDriver(driver:any,idVehicule): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(driver);
    return this._http.put(this.urlApiDrivers+idVehicule,driver,options).map(res => res.json());
                                                                 }                                                                
public addDriver(driver,idVehicule:number): Observable<any> {
   let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(driver);
    console.log(driver);
    return this._http.post(this.urlApiDrivers+idVehicule,driver, options).map(res => res.json());
  }
getDriver(idDriver: number){
  return this.drivers.find(driver => driver.idDriver === idDriver);

}


}


