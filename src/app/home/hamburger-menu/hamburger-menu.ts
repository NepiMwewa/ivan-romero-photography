import { Component } from '@angular/core';

@Component({
  selector: 'app-hamburger-menu',
  imports: [],
  templateUrl: './hamburger-menu.html',
  styleUrl: './hamburger-menu.css',
})
export class HamburgerMenu {
  protected isOpen = false;
  protected toggleMenu() {
    console.log('Toggling menu');
    this.isOpen = !this.isOpen;
  }
}
