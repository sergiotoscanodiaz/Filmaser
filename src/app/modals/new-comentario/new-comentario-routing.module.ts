import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewComentarioPage } from './new-comentario.page';

const routes: Routes = [
  {
    path: '',
    component: NewComentarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewComentarioPageRoutingModule {}
