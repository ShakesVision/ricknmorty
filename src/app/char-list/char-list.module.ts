import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CharDetailComponent } from '../components/char-detail/char-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CharDetailComponent,
  },
];
@NgModule({
  declarations: [CharDetailComponent],
  imports: [CommonModule, HttpClientModule, RouterModule.forChild(routes)],
})
export class CharListModule {}
