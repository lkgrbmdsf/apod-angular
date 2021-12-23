import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login-page/login.component';
import { MainComponent } from './core/main-page/main.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { LoggedInAuthGuard } from './shared/guard/logged-in-auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login-page', pathMatch: 'full' },
  { path: 'login-page', component: LoginComponent, canActivate: [LoggedInAuthGuard] },
  { path: 'apod', component: MainComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/apod' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
