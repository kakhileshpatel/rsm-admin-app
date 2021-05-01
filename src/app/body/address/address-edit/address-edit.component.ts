import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from '../address.service';
import { Address } from '../addressModel';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-address-edit',
  templateUrl: './address-edit.component.html',
  styleUrls: ['./address-edit.component.css']
})
export class AddressEditComponent implements OnInit {

  @ViewChild('f') editAddressFrom: NgForm;

  //address: Address = new Address();
  //Address = new Address('', '', '', '', '', 0, '', 0, 0, 0);
  address: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private addrService: AddressService
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id']
    console.log(id);
    if (id == 0) {
      //router navigation programatically
      this.router.navigate(['/address/create']);
    } else {
      this.getAddressById(id);
    }
  }

  getAddressById(id) {
    this.addrService.getAddressById(id).subscribe(
      responseData => {
        //debugger;
        console.log(responseData);
        /*if (responseData == null) {
          this.address.id = 0;
          this.address.line1 = '';
          this.address.line2 = '';
          this.address.city = '';
          this.address.state = '';
          this.address.country = '';
          this.address.pin = 0;
          this.address.label = 'HOME';

        } else {*/
          this.address = responseData;
       // }
      });
  }

  onUpdateAddress() {
    console.log(this.editAddressFrom);
    this.address.id = this.editAddressFrom.value.id;
    this.address.line1 = this.editAddressFrom.value.line1;
    this.address.line2 = this.editAddressFrom.value.line2;
    this.address.city = this.editAddressFrom.value.city;
    this.address.state = this.editAddressFrom.value.state;
    this.address.country = this.editAddressFrom.value.country;
    this.address.pin = this.editAddressFrom.value.pin;
    this.address.label = this.editAddressFrom.value.label;
    this.address.assetOwnerId = 0;
    this.address.assetId = 0;
    this.address.assetType = 0;

    console.log(this.address);
    this.addrService.updateAddressById(this.address).subscribe(responseData => {
      console.log(responseData);
      //after saving redirect to address list page
      this.router.navigate(['/address']);
    });

    
  }

}
