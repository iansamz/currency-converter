import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndexedDbService {

  eVersion :number = 1;
  exchangeDb : any;
  constructor() { 
    // this.exchangeDb = new AngularIndexedDB('exchangeDb', this.eVersion);
    // this.exchangeDb.openDatabase(1, evt=>{

    // }) 
  }


}
