import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json;charset=UTF-8'
  }),
};
const API_URL = 'https://reqres.in';
@Injectable({
    providedIn: 'root'
})
export class HeroSericeService {

  constructor(private http: HttpClient) { }
  // public post(url): Observable<any> {
  //   return this.http.get(API_URL + '/api/' + url).pipe(map(res => res));
  // }
   getData() {
    const url = "https://jsonplaceholder.typicode.com/posts"
    return this.http.get(url);
  }

}
