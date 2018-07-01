import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { CurrencyService } from '../currency.service';
import { Currency, Country } from '../currency';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currencies : Currency[] = [];
  countries : Country[] = [];
  constructor(
    public _currencyService : CurrencyService
  ) { 
  }

  ngOnInit() {
    this._currencyService.getCurrencies().subscribe(res=>{
      Object.keys(res.results).map(
        key => this.currencies.push(res.results[key])
      );
    });
    this._currencyService.getCountries().subscribe(res=>{
      Object.keys(res.results).map(
        key => this.countries.push(res.results[key])
      );
      // console.log(this.countries);
    });
    
    
  }

  toValue : number = 0;

  fromValueFormControl = new FormControl(0, [
    Validators.required
  ]);
  toValueFormControl = new FormControl({value:this.toValue, disabled:true}, [
    Validators.required
  ]);
  fromCurrencyFormControl = new FormControl('KES', [
    Validators.required
  ]);
  toCurrencyFormControl = new FormControl('USD', [
    Validators.required
  ]);

  convert(){
    this._currencyService.getConversion(this.fromCurrencyFormControl.value,this.toCurrencyFormControl.value).subscribe(res=>{
      let conversion = `${this.fromCurrencyFormControl.value}_${this.toCurrencyFormControl.value}`;
      
      this.toValue = this.fromValueFormControl.value * Object.values(res)[0];
      console.log(this.toValue);
    });
    
  }
}
