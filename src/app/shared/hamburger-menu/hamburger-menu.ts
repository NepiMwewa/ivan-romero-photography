import { Component, ChangeDetectionStrategy, signal, ElementRef, viewChild, effect, HostListener } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-hamburger-menu',
  imports: [RouterLink],
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

  constructor(private elementRef: ElementRef) {
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

  protected closeMenu(){
    if(this.isOpen()){
      this.isOpen.set(false);
    }
  }

  protected toggleMenu() {
    this.isOpen.update(open => !open);
  }

  protected onEscapeKey() {
    this.closeMenu();
  }

  @HostListener('document:click', ['$event'])
  protected onDocumentClick(event: MouseEvent) {
    if(!this.isOpen()){
      return;
    }

    const target = event.target as Node;

    const isInsideComponent = this.elementRef.nativeElement.contains(target);
    
    if (!isInsideComponent) {
      this.closeMenu();
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
    }else if (event.key === 'Enter') {
      this.closeMenu();
    }
  }
}
