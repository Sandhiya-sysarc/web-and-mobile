import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb-browser';

@Injectable({
  providedIn: 'root'
})
export class PouchdbService {
  private db: PouchDB.Database;
  constructor() { 
    this.db = new PouchDB('my_first_database');
    console.log(this.db)
  }
 async documentDataService(doc: any): Promise<any>{
 try{
  const response = await this.db.put({
    _id: new Date().toISOString(),
    ...doc
  });
  return response;
 }
 catch(error){
 }
  }
}
