import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ifriends } from './friends';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {
  // tslint:disable-next-line: variable-name
  // tslint:disable-next-line: no-inferrable-types
  // tslint:disable-next-line: variable-name
  // tslint:disable-next-line: no-inferrable-types
  private url: string = '/assets/data/friends.json';

  constructor(private http: HttpClient) {}

  getFriends(): Observable<Ifriends[]> {
    return this.http.get<Ifriends[]>(this.url);
  }
}
