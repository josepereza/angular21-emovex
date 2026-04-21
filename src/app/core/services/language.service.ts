import { Injectable, signal } from '@angular/core';

export type AppLanguage = 'es' | 'en';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly language = signal<AppLanguage>('es');

  setLanguage(language: AppLanguage) {
    this.language.set(language);
  }
}
