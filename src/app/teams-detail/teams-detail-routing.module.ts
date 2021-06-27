import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamsDetailPage } from './teams-detail.page';

const routes: Routes = [
  {
    path: '',
    component: TeamsDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamsDetailPageRoutingModule {}
