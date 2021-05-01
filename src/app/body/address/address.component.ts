import { Component, OnInit } from '@angular/core';
import { AddressService } from './address.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  API_URL_ADDRESS = 'http://localhost:8080/address';

  addresses: any = [];

  constructor(private http: HttpClient, private addrService: AddressService) { }

  ngOnInit(): void {
    this.fetchAddresses();
  }

  fetchAddresses() {
    this.addrService.getAddresses().subscribe(
      responseData => {
        this.addresses = responseData
      });
    //console.log(this.addresses);
    /*this.http.get(this.API_URL_ADDRESS).subscribe(responseData => {
      console.log(responseData);
      this.addresses = responseData;
    });*/
  }


}
