import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login-page/login.component';
import { CardComponent } from './core/main-page/card/card.component';
import { MainComponent } from './core/main-page/main.component';
import { AuthGuard } from './shared/guard/auth.guard';
// import { LoggedInAuthGuard } from './shared/guard/logged-in-auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login-page', pathMatch: 'full' },
  { path: 'login-page', component: LoginComponent, canLoad: [AuthGuard] },
  { path: 'apod', component: MainComponent, canActivate: [AuthGuard] },
  { path: 'apod/:date', component: CardComponent },
  { path: '**', redirectTo: '/apod' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}

//TODO:  make only one guard
//TODO: make one shared folder with module
//TODO: make services provide in exact componnt
//TODO: make redirect not in guard but in routing
