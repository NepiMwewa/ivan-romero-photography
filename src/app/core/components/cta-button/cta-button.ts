import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cta-button',
  imports: [RouterModule],
  templateUrl: './cta-button.html',
  styleUrl: './cta-button.css',
})
export class CtaButton {
  @Input() buttonText: string = 'Button text';
  @Input() buttonLink: string = '/home'; // Set a default link
  @Input() buttonClass: string = 'primary'; // Set a default class
}
