import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DB_URL } from '../constants/constant-urls';
import { User } from '../models/login-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(user: User): Observable<any> {
    user.id = Date.now();

    return this.http.post(DB_URL + 'users', user);
  }

  login(user: User) {
    console.log(user);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(DB_URL + 'users');
  }
}
