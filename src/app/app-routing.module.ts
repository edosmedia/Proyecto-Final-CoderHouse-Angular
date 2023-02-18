import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './Layouts/dashboard-layout/dashboard-layout.component';
import { CleanLayoutComponent } from './Layouts/clean-layout/clean-layout.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';


const routes: Routes = [
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
        redirectTo: 'login'
      }
    ]
  },
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardPageComponent,
        data: {
          nombre: 'Dashboard'
        }
      },
      {
        path: 'estudiantes',
        loadChildren: () => import ('./pages/students-page/students.module').then(m => m.StudentsModule),
        data: {
          nombre: 'Estudiantes'
        }
      },
      {
        path: 'materias',
        loadChildren: () => import('./pages/subjects/subjects.module').then(m => m.SubjectsModule),
        data: {
          nombre: 'Materias'
        }
      },
      {
        path: 'usuarios',
        loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule),
        data: {
          nombre: 'Usuarios'
        }
      },
      {
        path: 'matriculados',
        loadChildren: () => import('./pages/enrolled/enrolled.module').then(m => m.EnrolledModule),
        data: {
          nombre: 'Matriculados'
        }
      },
      {
        path: 'contacto',
        component: ContactsComponent
      },
      {
        path: '**',
        redirectTo: 'auth/login'
      }

    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
