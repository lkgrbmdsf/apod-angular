import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DB_URL } from '../constants/constant-urls';
import { User } from '../models/login-model';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  usersList: User[] = [];

  constructor(private http: HttpClient) {}

  register(user: User): Observable<any> {
    return this.http.post(DB_URL + 'users', user);
  }

  login(user: User) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  getAllUsers() {
    return this.http.get<User[]>(DB_URL + 'users');
  }
}
