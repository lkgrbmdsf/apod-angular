import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './shared/models/login-model';
import { AuthService } from './shared/services/auth.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isLogin: boolean = true;

  user: User = {} as User;

  loginErrorMsg: string = '';

  authForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}

  get formUsername() {
    return this.authForm.get('username') as FormGroup;
  }

  get formPassword() {
    return this.authForm.get('password') as FormGroup;
  }

  register() {
    this.user = this.authForm.value;
    this.auth.register(this.user as User).subscribe();
  }

  login() {
    this.user = this.authForm.value;

    this.auth
      .getAllUsers()
      .pipe(
        map((data) =>
          data.find(
            (user) => user.username && user.password === this.user.username && this.user.password,
          ),
        ),
      )
      .subscribe((data) => {
        if (data) {
          this.auth.login(this.user as User);
          return this.router.navigate(['/main-page']);
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
