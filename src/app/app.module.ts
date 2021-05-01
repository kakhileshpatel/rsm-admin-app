import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './body/sidebar/sidebar.component';
import { HomeComponent } from './body/home/home.component';
import { AddressComponent } from './body/address/address.component';
import { CreateAddressComponent } from './body/address/create-address/create-address.component';
import { from } from 'rxjs';
import { AddressEditComponent } from './body/address/address-edit/address-edit.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    AddressComponent,
    CreateAddressComponent,
    AddressEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
