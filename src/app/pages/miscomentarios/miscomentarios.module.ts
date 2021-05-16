import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiscomentariosPageRoutingModule } from './miscomentarios-routing.module';

import { MiscomentariosPage } from './miscomentarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiscomentariosPageRoutingModule
  ],
  declarations: [MiscomentariosPage]
})
export class MiscomentariosPageModule {}
