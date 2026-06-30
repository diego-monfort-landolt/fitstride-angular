import { Routes } from '@angular/router';

import { Home } from './features/home/home';
import { About } from './features/about/about';
import { Login } from './features/auth/login/login';
import { Register } from './features/auth/register/register';
import { Dashboard } from './features/dashboard/dashboard';
import { Contact } from './features/contact/contact';

export const routes: Routes = [
  { path: '', component: Home, title: 'FitStride | Home' },
  { path: 'about', component: About, title: 'Über mich | FitStride' },
  { path: 'login', component: Login, title: 'Login | FitStride' },
  { path: 'register', component: Register, title: 'Registrierung | FitStride' },
  { path: 'dashboard', component: Dashboard, title: 'Dashboard | FitStride' },
  { path: 'contact', component: Contact, title: 'Kontakt | FitStride' },
  { path: '**', redirectTo: '' }
];