import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { LandingComponent } from './landing/landing.component';
import { LocationService } from './location.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
