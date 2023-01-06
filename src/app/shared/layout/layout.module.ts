import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AngularMaterialModule } from '../modules/angular-material/angular-material.module';



@NgModule({
  declarations: [
    HeaderComponent,
    PageWrapperComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    HeaderComponent,
    PageWrapperComponent,
    SidenavComponent
  ],
})
export class LayoutModule {}
