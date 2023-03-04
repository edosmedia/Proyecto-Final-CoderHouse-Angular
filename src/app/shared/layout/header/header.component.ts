import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { SideNavService } from '../sidenav/side-nav.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private sideNavService: SideNavService) {}

  ngOnInit(): void {}

  clickMenu() {
    this.sideNavService.toggle();
    console.log(this.sideNavService);
  }
}
