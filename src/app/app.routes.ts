import { Routes } from '@angular/router';

import { Home } from './features/home/home';
import { About } from './features/about/about';
import { Login } from './features/auth/login/login';
import { Register } from './features/auth/register/register';
import { Dashboard } from './features/dashboard/dashboard';
import { Contact } from './features/contact/contact';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'FitStride | Fitness & Running Dashboard',
    data: {
      seo: {
        title: 'FitStride | Fitness & Running Dashboard',
        description: 'Modernes Angular Fitness- und Running-Projekt mit Mock-Daten, Dashboard und responsivem Design.',
        keywords: 'Angular, Fitness, Running, Portfolio, TypeScript, SCSS'
      }
    }
  },
  {
    path: 'about',
    component: About,
    title: 'Über mich | FitStride',
    data: {
      seo: {
        title: 'Über mich | FitStride',
        description: 'Erfahre mehr über das Angular Portfolio-Projekt mit Fokus auf Architektur, UX und Qualität.'
      }
    }
  },
  {
    path: 'login',
    component: Login,
    title: 'Login | FitStride',
    data: {
      seo: {
        title: 'Login | FitStride',
        description: 'Login-Seite für das lokale FitStride Demo-Dashboard.'
      }
    }
  },
  {
    path: 'register',
    component: Register,
    title: 'Registrierung | FitStride',
    data: {
      seo: {
        title: 'Registrierung | FitStride',
        description: 'Frontend-only Registrierungsformular mit Angular Validierungen.'
      }
    }
  },
  {
    path: 'dashboard',
    component: Dashboard,
    title: 'Dashboard | FitStride',
    canActivate: [authGuard],
    data: {
      seo: {
        title: 'Dashboard | FitStride',
        description: 'Geschütztes Running Dashboard mit Mock-Daten, Interessen und lokalen Empfehlungen.'
      }
    }
  },
  {
    path: 'contact',
    component: Contact,
    title: 'Kontakt | FitStride',
    data: {
      seo: {
        title: 'Kontakt | FitStride',
        description: 'Kontaktformular mit Angular Formularvalidierung in einem modernen Portfolio-Projekt.'
      }
    }
  },
  {
    path: '**',
    redirectTo: ''
  }
];