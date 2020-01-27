import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  paises: any[] = [];
  title = 'dexF';
  filtro: any;
  paisesFiltered: any;
  opcionFilter: any;
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get('https://restcountries.eu/rest/v2/all')
      .subscribe((resp: any) => {
        this.paises = resp;
        this.paisesFiltered = resp;
        console.log(resp);
      });
  }

  changeFilter(event){
    let x = event.target.value;
    this.opcionFilter = x;
  }

  searchFilter(event) {
    if (!event.target.value) { return this.paisesFiltered = this.paises; }
    let filtro = event.target.value;
    switch (this.opcionFilter) {
      case 'Languagues':
        this.paisesFiltered = [...new Set([
      ...this.paises.filter(({languages}) => languages.find((x) => x.name.toLowerCase().startsWith(filtro))),
    ])];
        break;
      case 'Country':
        this.paisesFiltered = [...new Set([
          ...this.paises.filter(({ name }) => name.toLowerCase().startsWith(filtro)),
        ])];
      break;
      case 'Continent':
        this.paisesFiltered = [...new Set([
          ...this.paises.filter(({ region }) => region.toLowerCase().startsWith(filtro)),
        ])];
      break;
    }
    // this.paisesFiltered = [...new Set([
    //   ...this.paises.filter(({ name }) => name.toLowerCase().startsWith(filtro)),
    //   ...this.paises.filter(({languages}) => languages.find((x) => x.nativeName.toLowerCase().startsWith(filtro))),
    // ])];
    console.log(event.target.value);
  }
}
