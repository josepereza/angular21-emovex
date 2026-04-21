import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  private readonly languageService = inject(LanguageService);

  protected readonly content = computed(() => {
    if (this.languageService.language() === 'en') {
      return {
        eyebrow: 'Own manufacturing · R&D · Support',
        title: 'Aesthetic tech. Real results.',
        copy: 'Reliable medical-aesthetic equipment for centers that demand performance.',
        primaryCta: 'Book demo',
        secondaryCta: 'View equipment',
        badge: 'EMOVEX PRO',
        cardLabel: 'Pro area',
        cardTitle: 'Manufacturing and support',
        cardCopy: 'Equipment, training and technical service from one manufacturer.',
        metric1: '+30 years',
        metric1Copy: 'building equipment',
        metric2: 'Own technology',
        metric2Copy: 'R&D and support'
      };
    }

    return {
      eyebrow: 'Fabricación propia · I+D · Soporte',
      title: 'Tecnología estética. Resultados reales.',
      copy: 'Equipos médico-estéticos fiables para centros que exigen rendimiento.',
      primaryCta: 'Pedir demo',
      secondaryCta: 'Ver equipos',
      badge: 'EMOVEX PRO',
      cardLabel: 'Área profesional',
      cardTitle: 'Fabricación y soporte',
      cardCopy: 'Equipos, formación y servicio técnico en un solo fabricante.',
      metric1: '+30 años',
      metric1Copy: 'fabricando equipos',
      metric2: 'Tecnología propia',
      metric2Copy: 'I+D y soporte'
    };
  });
}
