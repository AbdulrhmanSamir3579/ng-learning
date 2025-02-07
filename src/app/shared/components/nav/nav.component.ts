import { Component } from '@angular/core';
import {LanguageService} from '../../../core/services/language.service';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.component.html'
})
export class NavComponent {
  isMenuOpen = false;
  language = 'en';


  constructor(private languageService: LanguageService) {
    this.language = localStorage.getItem('lang') || 'en';
    // this.translate.use(this.language);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  switchLanguage(lang: string) {
    this.languageService.changeLanguage(lang);
    this.language = lang;
    // this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }
}
