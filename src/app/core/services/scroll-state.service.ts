import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { DestroyRef, Injectable, PLATFORM_ID, inject, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollStateService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);

  readonly y = signal(0);
  readonly scrolled = signal(false);

  constructor() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const onScroll = () => {
      const nextY = this.document.defaultView?.scrollY ?? 0;
      this.y.set(nextY);
      this.scrolled.set(nextY > 24);
    };

    onScroll();
    this.document.defaultView?.addEventListener('scroll', onScroll, { passive: true });
    this.destroyRef.onDestroy(() =>
      this.document.defaultView?.removeEventListener('scroll', onScroll)
    );
  }
}
