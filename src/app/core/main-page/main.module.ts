import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { ApodCardListComponent } from './apod-card-list/apod-card-list.component';
import { MainComponentsModule } from './components/main-components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MainRoutingModule } from './main-routing.module';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [MainComponent, ApodCardListComponent, CardComponent],
  imports: [CommonModule, MainComponentsModule, ReactiveFormsModule, MainRoutingModule],
  exports: [MainComponent],
})
export class MainModule {}
