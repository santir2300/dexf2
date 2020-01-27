import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { SimpleModalModule} from 'ngx-simple-modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MapaComponent } from './components/mapa/mapa.component';
import { CardCountryComponent } from './components/card-country/card-country.component';


@NgModule({
  declarations: [
    AppComponent,
    CardCountryComponent,
    MapaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // SimpleModalModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
