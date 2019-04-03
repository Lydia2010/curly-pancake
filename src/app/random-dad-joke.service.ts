import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomDadJokeService {

  constructor(private http: HttpClient) { }

    getRandom(): Observable<any> {
    return this.http.get('https://icanhazdadjoke.com/api#fetch-a-random-dad-joke');
  }

}
