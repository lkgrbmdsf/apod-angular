import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../shared/models/login-model';
import { AuthService } from '../../shared/services/auth.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLogin: boolean = true;

  user: User = {} as User;

  loginErrorMsg: string = '';

  authForm = this.fb.group({
    username: ['', [Validators.required, this.usernameValidator()]],
    password: ['', [Validators.required, this.passwordValidator()]],
  });

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('currentUser')) {
      this.router.navigate(['/apod']);
    }
  }

  get formUsername() {
    return this.authForm.get('username') as FormGroup;
  }

  get formPassword() {
    return this.authForm.get('password') as FormGroup;
  }

  usernameValidator(): null | Object {
    return (control: FormControl): ValidationErrors | null => {
      const input = control.value.split(' ').filter((str: string) => str.length > 0);
      const inputAsWord = input.join();
      return input.length === 1 && inputAsWord.length > 4 && inputAsWord.length < 12
        ? null
        : { length: 'should contain only one word less than 12 chars' };
    };
  }

  passwordValidator(): null | Object {
    return (control: FormControl): ValidationErrors | null => {
      const regEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
      const accepted = control.value.match(regEx);
      return accepted
        ? null
        : {
            passmatch:
              'should be at least 6 chars and contain at least one numeric digit, one uppercase and one lowercase letter',
          };
    };
  }

  register() {
    this.user = this.authForm.value;
    this.auth.register(this.user as User).subscribe();
    this.isLogin = !this.isLogin;
  }

  login() {
    this.user = this.authForm.value;

    this.auth
      .getAllUsers()
      .pipe(map((data) => data.find((user) => user.username === this.user.username)))
      .subscribe((data) => {
        if (data) {
          this.auth.login(this.user as User);
          return this.router.navigate(['/apod']);
        } else {
          this.loginErrorMsg = 'user doesnt exist';
          return this.loginErrorMsg;
        }
      });
  }

  clearFields() {
    this.authForm.setValue({ username: [''], password: [''] });
    this.loginErrorMsg = '';
  }
}
