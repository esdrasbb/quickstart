import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
 
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
 
import { Hero }           from './hero';
 
@Injectable()
export class HeroSearchService {
 
  private heroesUrl = 'http://127.0.0.1:3999/heroes';
  constructor(private http: Http) {}
 
  search(term: string): Observable<Hero[]> {
    let heroFound = this.http
               .get(this.heroesUrl + `?name=${term}`)
               .map((res:Response) => res.json() as Hero[]);
    return heroFound;
  }
}