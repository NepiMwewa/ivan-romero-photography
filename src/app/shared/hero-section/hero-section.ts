import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  imports: [RouterModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() mainButtonText: string = '';
  @Input() mainButtonLink: string = '/contact'; // Set a default link
  @Input() secondaryButtonText: string = '';
  @Input() secondaryButtonLink: string = '/portfolio'; // Set a default link
}
