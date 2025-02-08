import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./tailwind.component').then(c => c.TailwindComponent),
    children: [
      {
        path: 'utility-first',
        loadComponent: () => import('./utility-first/utility-first.component').then(c => c.UtilityFirstComponent)
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TailwindRoutingModule {
}
