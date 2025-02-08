import {Component} from '@angular/core';
import {SharedModule} from '../../modules/shared.module';

@Component({
  selector: 'app-tailwind-aside',
  imports: [SharedModule],
  templateUrl: './tailwind-aside.component.html'
})
export class TailwindAsideComponent {
  sidebarItems: { title: string, route: string }[];

  constructor() {
    this.sidebarItems = [
      {title: 'Utility First', route: 'utility-first'},
    ]
  }
}
