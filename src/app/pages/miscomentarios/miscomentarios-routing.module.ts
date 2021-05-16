import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiscomentariosPage } from './miscomentarios.page';

const routes: Routes = [
  {
    path: '',
    component: MiscomentariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiscomentariosPageRoutingModule {}
