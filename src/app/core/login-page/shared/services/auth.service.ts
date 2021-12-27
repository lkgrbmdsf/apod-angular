import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DB_URL } from '../constants/constant-urls';
import { User } from '../models/login-model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  usersList: User[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  register(user: User): Observable<any> {
    return this.http.post(DB_URL + 'users', user);
  }

  login(user: User) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    // let currentUser;
    // return this.getAllUsers().pipe(
    //   map((data) => {
    //     currentUser = data.find((user) => user.password === password && user.username === username);
    //     // localStorage.setItem('currentUser', JSON.stringify(currentUser));
    //   }),
    // );
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  getAllUsers() {
    return this.http.get<User[]>(DB_URL + 'users');
  }
}
