import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guard/auth.guard';
import { CardComponent } from './card/card.component';
import { MainComponent } from './main.component';

const cardRoutes: Routes = [
  { path: 'apod', component: MainComponent, canActivate: [AuthGuard] },
  { path: 'apod/:date', component: CardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(cardRoutes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
