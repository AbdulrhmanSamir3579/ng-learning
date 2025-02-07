import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavComponent} from './shared/components/nav/nav.component';
import {LanguageService} from './core/services/language.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private languageService: LanguageService) {
  }

  title = 'AngularTS';

  ngOnInit(): void {
    this.setAppDefaultLang();
  }


  private setAppDefaultLang() {
    this.languageService.setInitialAppLanguage()
  }
}
