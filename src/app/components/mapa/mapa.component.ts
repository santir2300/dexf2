import { Component, OnInit, Input } from '@angular/core';
declare let google;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  @Input() latLng: any;
  maps: any;
  constructor() { }

  ngOnInit() {

    console.log(this.latLng);
    setTimeout ( () => {
      this.maps = new google.maps.Map(document.getElementById('map'), {
        center: { lat: this.latLng[0], lng: this.latLng[1]},
        zoom: 5
    });
    }, 1000 );
}

}
