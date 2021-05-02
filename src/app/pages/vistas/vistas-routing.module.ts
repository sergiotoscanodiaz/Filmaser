import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistasPage } from './vistas.page';

const routes: Routes = [
  {
    path: '',
    component: VistasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistasPageRoutingModule {}
