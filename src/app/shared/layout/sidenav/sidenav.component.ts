import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../../../services/clima.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  climaHoy: any;

  constructor(public climaservice: ClimaService ) {

    this.climaservice.getClima('Santiago').subscribe(res => {
      return this.climaHoy = res;
    });
   }

  ngOnInit(): void {

  }

}
