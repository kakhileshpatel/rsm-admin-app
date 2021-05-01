import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Address } from './addressModel';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  //API_URL_ADDRESS: string = 'https://run.mocky.io/v3/486a032a-4637-4768-aabb-0c1698632a4b';
  API_URL_ADDRESS = 'http://localhost:8080/address';

  constructor(private http: HttpClient) { }

  updateAddressById(address) {
    return this.http.put(this.API_URL_ADDRESS, address);
  }

  getAddresses() {
    return this.http.get(this.API_URL_ADDRESS);
  }

  getAddressById(id) {
    return this.http.get(this.API_URL_ADDRESS+'/'+id);
  }
}
