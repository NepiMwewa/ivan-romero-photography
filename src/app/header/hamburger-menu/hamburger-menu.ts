import { Component, ChangeDetectionStrategy, signal, ElementRef, viewChild, effect } from '@angular/core';

@Component({
  selector: 'app-hamburger-menu',
  imports: [],
  templateUrl: './hamburger-menu.html',
  styleUrl: './hamburger-menu.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown.escape)': 'onEscapeKey()'
  }
})
export class HamburgerMenu {
  protected isOpen = signal(false);
  protected menuId = Math.random().toString(36).substring(7);
  private menuContainer = viewChild<ElementRef>('menuContainer');

  constructor() {
    effect(() => {
      if (this.isOpen()) {
        // Focus first menu item when opened
        setTimeout(() => {
          const firstLink = this.menuContainer()?.nativeElement.querySelector('a');
          firstLink?.focus();
        });
      }
    });
  }

  protected toggleMenu() {
    this.isOpen.update(open => !open);
  }

  protected onEscapeKey() {
    if (this.isOpen()) {
      this.isOpen.set(false);
    }
  }

  protected onMenuKeydown(event: KeyboardEvent) {
    const target = event.target as HTMLAnchorElement;
    const menuItems = Array.from(target.parentElement?.querySelectorAll('a') || []) as HTMLAnchorElement[];
    const currentIndex = menuItems.indexOf(target);

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      const nextIndex = (currentIndex + 1) % menuItems.length;
      menuItems[nextIndex].focus();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      const prevIndex = currentIndex === 0 ? menuItems.length - 1 : currentIndex - 1;
      menuItems[prevIndex].focus();
    }
  }
}
