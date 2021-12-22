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
  constructor(private http: HttpClient, private router: Router) {}

  register(user: User): Observable<any> {
    user.id = Date.now();
    return this.http.post(DB_URL + 'users', user);
  }

  login(user: User) {
    return this.getAllUsers().subscribe((data) => {
      data.find((dbUser: User) => {
        return dbUser.username && dbUser.password === user.username && user.password
          ? this.router.navigate(['/main-page'])
          : new Error('wrong username or password');
      });
    });
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(DB_URL + 'users');
  }
}
