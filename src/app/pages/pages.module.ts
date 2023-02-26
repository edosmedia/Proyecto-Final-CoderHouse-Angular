import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { ContactsComponent } from './contacts/contacts.component';
import { UsersModule } from './users/users.module';
import { Routes, RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from '../Layouts/dashboard-layout/dashboard-layout.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardPageComponent
      },
      {
        path: 'usuarios',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
        data: {
          nombre: 'Usuarios'
        }
      },
      {
        path: 'estudiantes',
        loadChildren: () => import('./students-page/students.module').then(m => m.StudentsModule),
      },
      {
        path: 'materias',
        loadChildren: () => import('./subjects/subjects.module').then(m => m.SubjectsModule),
        data: {
          nombre: 'Materias'
        }
      },
      {
        path: 'matriculados',
        loadChildren: () => import('./enrolled/enrolled.module').then(m => m.EnrolledModule),
        data: {
          nombre: 'Matriculados'
        }
      },
      {
        path: 'contacto',
        component: ContactsComponent
      }
    ]
  }
]


@NgModule({
  declarations: [
    DashboardPageComponent,
    ContactsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UsersModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [

  ],
})
export class PagesModule { }
