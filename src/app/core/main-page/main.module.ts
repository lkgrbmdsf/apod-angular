import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { ApodCardListComponent } from './apod-card-list/apod-card-list.component';
import { MainComponentsModule } from './components/main-components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { SafePipe } from './shared/pipes/safe.pipe';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [MainComponent, ApodCardListComponent, CardComponent, SafePipe, SpinnerComponent],
  imports: [CommonModule, MainComponentsModule, ReactiveFormsModule],
})
export class MainModule {}
