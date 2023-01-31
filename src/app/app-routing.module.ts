import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './Layouts/dashboard-layout/dashboard-layout.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { SubjectsComponent } from './pages/subjects/subjects.component';
import { CleanLayoutComponent } from './Layouts/clean-layout/clean-layout.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardPageComponent
      },
      {
        path: 'estudiantes',
        component: StudentsPageComponent
      },
      {
        path: 'materias',
        component: SubjectsComponent
      },
      {
        path: 'contacto',
        component: ContactsComponent
      },
      {
        path: '**',
        redirectTo: 'login'
      }

    ]
  },
  {
    path: 'auth',
    component: CleanLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginPageComponent
      },
      {
        path: '**',
        component: NotFoundComponent,
        // redirectTo: 'login'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
