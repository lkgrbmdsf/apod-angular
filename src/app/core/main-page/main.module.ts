import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { ApodCardComponent } from './apod-card/apod-card.component';
import { MainComponentsModule } from './components/main-components.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainComponent, ApodCardComponent],
  imports: [CommonModule, MainComponentsModule, ReactiveFormsModule],
  exports: [MainComponent],
})
export class MainModule {}
