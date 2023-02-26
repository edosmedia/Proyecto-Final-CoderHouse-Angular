import { Component, OnInit } from '@angular/core';
import { async, observable } from 'rxjs';
import { ClimaService } from '../../../services/clima.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  climaHoy: any;
  latitude: string | number | undefined;
  longitude: string | number | undefined;
  codernadas: number | undefined;
  resultado: any

  async ngOnInit(): Promise<void> {

    await navigator.geolocation.getCurrentPosition((pos) => {
      this.latitude = pos.coords.latitude;
      this.longitude = pos.coords.longitude;
      // console.log('Coordenadas' + this.latitude + this.longitude);
      this.codernadas = this.latitude;
      return (this.codernadas = this.longitude);
    });


  }

  constructor(public climaservice: ClimaService) {
    // console.log(this.codernadas);
    this.climaservice.getClima("Santiago", null, null).subscribe((res) => {
      return (this.climaHoy = res);
    });
  }
}
