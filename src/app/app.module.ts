import { PagesModule } from './pages/pages.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { DashboardLayoutComponent } from './Layouts/dashboard-layout/dashboard-layout.component';
import { LayoutsModule } from './Layouts/layouts.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SharedModule,
    PagesModule,
    LayoutsModule,
    AppRoutingModule
  ],
  exports: [
    SharedModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
