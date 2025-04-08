import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PouchDbPageRoutingModule } from './pouch-db-routing.module';
import { PouchDbPage } from './pouch-db.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PouchDbPageRoutingModule
  ],
  declarations: [PouchDbPage]
})
export class PouchDbPageModule {}
