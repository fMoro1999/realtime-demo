import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/results-page/results-page.component').then(
        (c) => c.ResultsPageComponent
      ),
  },
];
