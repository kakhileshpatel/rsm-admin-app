import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './body/home/home.component';
import { AddressComponent } from './body/address/address.component';
import { CreateAddressComponent } from './body/address/create-address/create-address.component';
import { AddressEditComponent } from './body/address/address-edit/address-edit.component';

const routes: Routes = [
  { path: 'address/edit/:id', component: AddressEditComponent },
  { path: 'address/create', component: CreateAddressComponent },
  { path: 'address', component: AddressComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
