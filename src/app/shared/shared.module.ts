import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [SpinnerComponent, PaginationComponent],
  imports: [CommonModule],
  exports: [SpinnerComponent, PaginationComponent],
})
export class SharedModule {}
