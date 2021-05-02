import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViendoPageRoutingModule } from './viendo-routing.module';

import { ViendoPage } from './viendo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViendoPageRoutingModule
  ],
  declarations: [ViendoPage]
})
export class ViendoPageModule {}
