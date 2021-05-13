import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewComentarioPageRoutingModule } from './new-comentario-routing.module';

import { NewComentarioPage } from './new-comentario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewComentarioPageRoutingModule
  ],
  declarations: [NewComentarioPage]
})
export class NewComentarioPageModule {}
