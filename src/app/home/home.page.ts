import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {


  constructor(public router:Router) {}

  openCamera(){
    this.router.navigate(['camera-plugin'])
  }
  openDB(){
    this.router.navigate(['pouch-db'])
  }
}
