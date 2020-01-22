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
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get('https://restcountries.eu/rest/v2/all')
      .subscribe((resp: any) => {
        this.paises = resp;
        this.paisesFiltered = resp;
      });
  }

  searchFilter(event) {
    if (!event.target.value) { return this.paisesFiltered = this.paises; }
    this.paisesFiltered = [...new Set([
      ...this.paises.filter(({ name }) => name.toLowerCase().startsWith(event.target.value)),
    ])];
    console.log(event.target.value);
  }
}
