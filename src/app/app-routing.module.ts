import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharListComponent } from './components/char-list/char-list.component';

const routes: Routes = [
  {
    path: '',
    component: CharListComponent,
    data: { reuse: true },
  },
  {
    path: 'detail/:id',
    loadChildren: () =>
      import('./char-list/char-list.module').then((m) => m.CharListModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
