import {Inject, Injectable} from '@angular/core';
import {TranslationService} from './translation.service';
import {LocalStorageService} from './local-storage.service';
import {DOCUMENT} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private html: HTMLElement;
  private readonly langKey = 'lang'
  private readonly languageCode = 'en';
  private currentLanguage;

  constructor(
    private translationService: TranslationService,
    private localStorageService: LocalStorageService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.html = this.document.getElementsByTagName('html')[0];
    this.currentLanguage = this.localStorageService.getItem(this.langKey) || this.languageCode;
  }

  setInitialAppLanguage() {
    this.translationService.setDefaultLang(this.currentLanguage);
    this.setLanguage(this.currentLanguage);
  }

  changeLanguage(lang: string): void {
    this.translationService.use(lang);
    this.setLanguage(lang);
  }

  private setLanguage(lang: string): void {
    this.currentLanguage = lang;
    this.localStorageService.setItem(this.langKey, lang);
    this.updateLayout();
  }

  private updateLayout(): void {
    this.html.lang = this.currentLanguage;
    this.document.dir = this.getDirection();
  }

  private getDirection(): string {
    return this.currentLanguage === this.languageCode ? 'ltr' : 'rtl';
  }
}
