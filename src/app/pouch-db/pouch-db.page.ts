import { Component, OnInit } from '@angular/core';
import { PouchdbService } from '../pouchdb.service';


@Component({
  standalone:false,
  selector: 'app-pouch-db',
  templateUrl: './pouch-db.page.html',
  styleUrls: ['./pouch-db.page.scss'],
})
export class PouchDbPage implements OnInit {

  document:any[] = []
  constructor(private pouchdbService:PouchdbService) {}

  async ngOnInit() {
  }

  async onAddDoc(){
    const newDocs  = {
      name : "sandhiya",
      message:"i am sandhiya"
    }
    console.log(newDocs)
     await this.pouchdbService.documentDataService(newDocs);
  }

}
