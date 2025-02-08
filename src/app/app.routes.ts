import {Routes} from '@angular/router';
import {HeroComponent} from './features/home/hero/hero.component';

export const routes: Routes = [
  {
    path: '',
    component: HeroComponent
  },
  {
    path: 'tailwind',
    loadChildren: () => import('./features/tailwind/tailwind.module').then(m => m.TailwindModule)
  }

];
