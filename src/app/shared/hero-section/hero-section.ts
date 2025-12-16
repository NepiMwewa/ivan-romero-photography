import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CtaButton } from "../../core/components/cta-button/cta-button";

@Component({
  selector: 'app-hero-section',
  imports: [RouterModule, CtaButton],
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
