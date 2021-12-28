import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { ApodCardListComponent } from './apod-card-list/apod-card-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SafePipe } from 'src/app/shared/pipes/safe.pipe';
import { ApodService } from 'src/app/shared/services/apod.service';
import { PagerService } from 'src/app/shared/services/pager.service';

@NgModule({
  declarations: [MainComponent, ApodCardListComponent, CardComponent, SafePipe],
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
  providers: [ApodService, PagerService],
})
export class MainModule {}
