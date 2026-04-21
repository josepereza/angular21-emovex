import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../../core/services/language.service';
import { ScrollStateService } from '../../../core/services/scroll-state.service';

@Component({
  selector: 'app-site-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './site-navbar.component.html',
  styleUrl: './site-navbar.component.css'
})
export class SiteNavbarComponent {
  private readonly scrollState = inject(ScrollStateService);
  private readonly languageService = inject(LanguageService);

  protected readonly menuOpen = signal(false);
  protected readonly isSolid = computed(() => this.scrollState.scrolled());
  protected readonly language = this.languageService.language;

  protected closeMenu() {
    this.menuOpen.set(false);
  }

  protected toggleMenu() {
    this.menuOpen.update((value) => !value);
  }

  protected setLanguage(language: 'es' | 'en') {
    this.languageService.setLanguage(language);
  }
}
