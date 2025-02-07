import { Component } from '@angular/core';
import {SharedModule} from '../../../shared/modules/shared.module';

@Component({
  selector: 'app-hero',
  imports: [
    SharedModule,
  ],
  templateUrl: './hero.component.html',
})
export class HeroComponent {

}
