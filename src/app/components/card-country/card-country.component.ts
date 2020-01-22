import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
@Component({
  selector: 'app-card-country',
  templateUrl: './card-country.component.html',
  styleUrls: ['./card-country.component.css']
})
export class CardCountryComponent implements OnInit {
  @Input() paises: any[] = [];
  BsModalRef: BsModalRef;
  pais: any;
  constructor(private http: HttpClient, private modalService: BsModalService) {
  }

  ngOnInit() {}

  openModal(template, pais) {
    this.BsModalRef = this.modalService.show(template);
    this.pais = pais;
  }
}
