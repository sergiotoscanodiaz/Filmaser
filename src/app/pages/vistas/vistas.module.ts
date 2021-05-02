import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistasPageRoutingModule } from './vistas-routing.module';

import { VistasPage } from './vistas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistasPageRoutingModule
  ],
  declarations: [VistasPage]
})
export class VistasPageModule {}
