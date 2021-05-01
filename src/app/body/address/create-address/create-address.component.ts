import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Address } from '../addressModel';

@Component({
  selector: 'app-create-address',
  templateUrl: './create-address.component.html',
  styleUrls: ['./create-address.component.css']
})
export class CreateAddressComponent implements OnInit {

  API_URL_ADDRESS_POST = 'http://localhost:8080/address';

  @ViewChild('f') newAddressFrom: NgForm;

  address: Address = new Address();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onCreateAddress() {
    console.log(this.newAddressFrom);
    this.address.line1 = this.newAddressFrom.value.line1;
    this.address.line2 = this.newAddressFrom.value.line2;
    this.address.city = this.newAddressFrom.value.city;
    this.address.state = this.newAddressFrom.value.state;
    this.address.country = this.newAddressFrom.value.country;
    this.address.pin = this.newAddressFrom.value.pin;
    this.address.label = this.newAddressFrom.value.label;
    this.address.assetOwnerId = 0;
    this.address.assetId = 0;
    this.address.assetType = 0;
   
    console.log(this.address);
    this.http
      .post(
        this.API_URL_ADDRESS_POST,
        this.address
      )
      .subscribe(responseData => {
        console.log(responseData);
      });


  }
}
