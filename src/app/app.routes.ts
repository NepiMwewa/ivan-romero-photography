import { Routes } from '@angular/router';
import { Layout } from './features/layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        loadComponent: () => import('./features/home/home').then(m => m.Home),
      },
      {
        path: 'get-started',
        loadComponent: () => import('./features/get-started/get-started').then(m => m.GetStarted),
      },
      {
        path: 'portfolio',
        loadComponent: () => import('./features/portfolio/portfolio').then(m => m.Portfolio),
      },
      {
        path: 'about',
        loadComponent: () => import('./features/about/about').then(m => m.About),
      },
      {
        path: 'contact',
        loadComponent: () => import('./features/contact/contact').then(m => m.Contact),
      },
    ],
  }
];
