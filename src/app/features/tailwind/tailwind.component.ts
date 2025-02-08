import { Component } from '@angular/core';
import {TailwindAsideComponent} from '../../shared/components/tailwind-aside/tailwind-aside.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-tailwind',
  imports: [
    TailwindAsideComponent,
    RouterOutlet
  ],
  standalone: true,
  templateUrl: './tailwind.component.html'
})
export class TailwindComponent {

}
