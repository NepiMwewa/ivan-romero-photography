import { Component } from '@angular/core';
import { HamburgerMenu } from './hamburger-menu/hamburger-menu';

@Component({
  selector: 'app-header',
  imports: [HamburgerMenu],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
