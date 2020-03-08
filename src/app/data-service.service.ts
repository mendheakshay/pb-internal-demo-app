import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Idata } from './data';
import { Jsondata } from './jsonData';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class DataService {

  private _url: string = '../../assets/data/new-data.json';

  constructor(private httpService: HttpClient) {
  }

  getData(): Observable<Jsondata[]> {
    return this.httpService.get<Jsondata[]>(this._url);
  }
}
