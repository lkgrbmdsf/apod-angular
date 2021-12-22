import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './shared/models/login-model';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isLogin: boolean = true;

  user: User = {} as User;

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
    this.auth
      .register(this.user as User)
      .subscribe({ next: () => this.router.navigate(['/main-page']) });
  }

  login() {
    this.user = this.authForm.value;
    this.auth.login(this.user);
  }
}
