import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login-page/login.component';
import { LoggedInAuthGuard } from './shared/guard/logged-in-auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login-page', pathMatch: 'full' },
  { path: 'login-page', component: LoginComponent, canActivate: [LoggedInAuthGuard] },
  { path: '**', redirectTo: '/apod' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
