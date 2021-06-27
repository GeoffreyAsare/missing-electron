import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamsDetailPageRoutingModule } from './teams-detail-routing.module';

import { TeamsDetailPage } from './teams-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamsDetailPageRoutingModule
  ],
  declarations: [TeamsDetailPage]
})
export class TeamsDetailPageModule {}
