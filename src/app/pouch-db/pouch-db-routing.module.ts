import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PouchDbPage } from './pouch-db.page';

const routes: Routes = [
  {
    path: '',
    component: PouchDbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PouchDbPageRoutingModule {}
