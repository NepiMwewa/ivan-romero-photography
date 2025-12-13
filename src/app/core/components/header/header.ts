import { Component } from '@angular/core';
import { HamburgerMenu } from '../../../shared/hamburger-menu/hamburger-menu';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [HamburgerMenu, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
