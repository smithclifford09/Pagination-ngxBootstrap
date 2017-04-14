import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';


@Injectable()
export class DataServiceService {

   constructor(private _http: Http) {
    }
private urlApi='http://localhost:8080/groupes/list';
    

      getGroupsByPageAndSize(page:number,size:number): Observable<any> {
        return this._http.get(this.urlApi+'?page='+page+'&size='+size).map(res => res.json());
    }

}
