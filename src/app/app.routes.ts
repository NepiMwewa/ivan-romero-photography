import { Routes } from '@angular/router';
import { Layout } from './layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        loadComponent: () => import('./home/home').then(m => m.Home),
      },
      {
        path: 'get-started',
        loadComponent: () => import('./get-started/get-started').then(m => m.GetStarted),
      },
      {
        path: 'portfolio',
        loadComponent: () => import('./portfolio/portfolio').then(m => m.Portfolio),
      },
      {
        path: 'about',
        loadComponent: () => import('./about/about').then(m => m.About),
      },
      {
        path: 'contact',
        loadComponent: () => import('./contact/contact').then(m => m.Contact),
      },
    ],
  }
];
