import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../../core/services/language.service';
import { HeroComponent } from '../../../shared/components/hero/hero.component';
import { SiteNavbarComponent } from '../../../shared/components/site-navbar/site-navbar.component';
import { SeoService } from '../../../core/services/seo.service';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  clientType: string;
  message: string;
}

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, HeroComponent, SiteNavbarComponent, FormsModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  private readonly seo = inject(SeoService);
  private readonly languageService = inject(LanguageService);

  protected readonly language = this.languageService.language;

  protected formData: ContactFormData = {
    name: '',
    email: '',
    phone: '',
    clientType: '',
    message: ''
  };

  protected onSubmit(): void {
    console.log('Form submitted:', this.formData);
    const mailtoLink = `mailto:buzon@emovex.es?subject=${encodeURIComponent(this.languageService.language() === 'es' ? 'Solicitud de información' : 'Information request')}&body=${encodeURIComponent(
      `Nombre: ${this.formData.name}\nEmail: ${this.formData.email}\nTeléfono: ${this.formData.phone}\nTipo: ${this.formData.clientType}\nMensaje: ${this.formData.message}`
    )}`;
    window.location.href = mailtoLink;
  }

  protected readonly content = computed(() => {
    if (this.languageService.language() === 'en') {
      return {
        heroContextCards: [
          {
            title: 'Own manufacturing',
            text: 'Design and production in Spain.',
            icon: '🏭'
          },
          {
            title: 'Real warranty',
            text: '3 years of coverage.',
            icon: '🛡️'
          },
          {
            title: 'Technical support',
            text: 'Direct service from factory.',
            icon: '🔧'
          },
          {
            title: 'Financing',
            text: 'Options for your investment.',
            icon: '💳'
          }
        ],
        solutionsKicker: 'Solutions',
        lumexirKicker: 'Featured equipment',
        lumexirTitle: 'Lumexir M15',
        lumexirCopy: 'Fast, painless and profitable hair removal with SHR and optional E-Light.',
        lumexirPoints: [
          'Up to 15 shots per second',
          'Suitable for all skin phototypes',
          'Refrigerated handpiece up to -6 °C',
          'Compatible with E-Light treatments'
        ],
        lumexirCta: 'View equipment',
        solutionsTitle: 'Equipment for every treatment',
        solutionsCopy: 'Professional catalog for hair removal, radiofrequency, pressotherapy and mesotherapy.',
        valueCards: [
          {
            title: 'Laser and IPL',
            text: 'Professional hair removal with high performance.',
            image: 'https://emovex.es/wp-content/uploads/2025/12/Lumexir-M15.webp'
          },
          {
            title: 'Radiofrequency',
            text: 'Facial and body treatments.',
            image: 'https://emovex.es/wp-content/uploads/2025/12/RF1.webp'
          },
          {
            title: 'Pressotherapy',
            text: 'Drainage and recovery protocols.',
            image: 'Emopress-24.png'
          }
        ],
        advantagesKicker: 'Benefits',
        advantagesTitle: 'Technology to grow',
        advantagesCopy: 'Reliable equipment, direct support and profitable lines for intensive use.',
        productHighlights: [
          'Professional diode laser',
          'IPL / SHR photoepilation',
          'Monopolar and bipolar radiofrequency',
          'Professional pressotherapy',
          'Transdermal mesotherapy',
          'Cavitation and accessories'
        ],
        timeline: [
          {
            title: 'More profit',
            text: 'Equipment built for agile sessions and strong utilization.'
          },
          {
            title: 'More trust',
            text: 'Own manufacturing, extended warranty and direct technical support.'
          },
          {
            title: 'More control',
            text: 'Training, protocols and follow-up for daily operation.'
          }
        ],
        distributionKicker: 'B2B',
        distributionTitle: 'A path for each profile',
        distributionCopy: 'Centers, distributors and professionals need different resources and support.',
        audiences: [
          {
            title: 'Centers',
            text: 'Visible results and profitable treatments.'
          },
          {
            title: 'Distribution',
            text: 'Commercial support and direct service.'
          },
          {
            title: 'Pro area',
            text: 'Training, manuals and priority support.'
          }
        ],
        contactKicker: 'Contact',
        contactTitle: 'Let us talk equipment',
        contactCopy: 'Request information, distribution or technical support through one channel.',
        contactPrimary: 'Write now',
        contactSecondary: 'Call now'
      };
    }

    return {
      heroContextCards: [
        {
          title: 'Fabricación propia',
          text: 'Diseño y producción en España.',
          icon: '🏭'
        },
        {
          title: 'Garantía real',
          text: '3 años de cobertura.',
          icon: '🛡️'
        },
        {
          title: 'Soporte técnico',
          text: 'Asistencia directa de fábrica.',
          icon: '🔧'
        },
        {
          title: 'Financiación',
          text: 'Opciones para tu inversión.',
          icon: '💳'
        }
      ],
      solutionsKicker: 'Soluciones',
      lumexirKicker: 'Equipo destacado',
      lumexirTitle: 'Lumexir M15',
      lumexirCopy: 'Fotodepilación rápida, indolora y rentable con SHR y E-Light opcional.',
      lumexirPoints: [
        'Hasta 15 disparos por segundo',
        'Apta para todos los fototipos',
        'Cabezal refrigerado hasta -6 °C',
        'Compatible con tratamientos E-Light'
      ],
      lumexirCta: 'Ver equipo',
      solutionsTitle: 'Equipos para cada tratamiento',
      solutionsCopy: 'Catálogo profesional para depilación, radiofrecuencia, presoterapia y mesoterapia.',
valueCards: [
          {
            title: 'Láser e IPL',
            text: 'Depilación profesional de alto rendimiento.',
            image: 'https://emovex.es/wp-content/uploads/2025/12/Lumexir-M15.webp'
          },
          {
            title: 'Radiofrecuencia',
            text: 'Tratamientos faciales y corporales.',
            image: 'https://emovex.es/wp-content/uploads/2025/12/RF1.webp'
          },
          {
            title: 'Presoterapia',
            text: 'Protocolos de drenaje y recuperación.',
            image: 'Emopress-24.png'
          }
        ],
      advantagesKicker: 'Ventajas',
      advantagesTitle: 'Tecnología para crecer',
      advantagesCopy: 'Equipos fiables, soporte directo y líneas rentables para uso intensivo.',
      productHighlights: [
        'Láser de diodo profesional',
        'Fotodepilación IPL / SHR',
        'Radiofrecuencia monopolar y bipolar',
        'Presoterapia profesional',
        'Mesoterapia transdérmica',
        'Cavitación y accesorios'
      ],
      timeline: [
        {
          title: 'Más rentabilidad',
          text: 'Equipos pensados para sesiones ágiles y alto aprovechamiento.'
        },
        {
          title: 'Más confianza',
          text: 'Fabricación propia, garantía ampliada y soporte técnico directo.'
        },
        {
          title: 'Más control',
          text: 'Formación, protocolos y seguimiento para tu operativa diaria.'
        }
      ],
      distributionKicker: 'B2B',
      distributionTitle: 'Una ruta por perfil',
      distributionCopy: 'Centros, distribuidores y profesionales requieren recursos y soporte distintos.',
      audiences: [
        {
          title: 'Centros',
          text: 'Resultados visibles y tratamientos rentables.'
        },
        {
          title: 'Distribución',
          text: 'Apoyo comercial y soporte directo.'
        },
        {
          title: 'Área Pro',
          text: 'Formación, manuales y asistencia prioritaria.'
        }
      ],
      contactKicker: 'Contacto',
      contactTitle: 'Hablemos de tu equipo',
      contactCopy: 'Pide información, distribución o soporte técnico desde un solo canal.',
      contactPrimary: 'Escribir ahora',
      contactSecondary: 'Llamar ahora'
    };
  });

  constructor() {
    effect(() => {
      const isEnglish = this.languageService.language() === 'en';

      this.seo.update({
        title: isEnglish
          ? 'EMOVEX | Professional aesthetic equipment with modern Angular SSR'
          : 'EMOVEX | Aparatología estética profesional con diseño moderno y SSR',
        description: isEnglish
          ? 'Modern EMOVEX concept in Angular 21 with SSR, reusable components and a clearer experience for centers, clinics and distributors.'
          : 'Rediseño conceptual de EMOVEX en Angular 21 con SSR, componentes reutilizables y una experiencia más clara para centros, clínicas y distribuidores.',
        keywords: isEnglish
          ? 'EMOVEX, aesthetic equipment, Angular 21, SSR, radiofrequency, IPL, diode laser'
          : 'EMOVEX, aparatología estética, Angular 21, SSR, radiofrecuencia, IPL, láser de diodo'
      });
    });
  }
}
