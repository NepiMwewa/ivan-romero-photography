import { Component, Input } from '@angular/core';
import { CtaButton } from "../../core/components/cta-button/cta-button";

@Component({
  selector: 'app-about-section',
  imports: [CtaButton],
  templateUrl: './about-section.html',
  styleUrl: './about-section.css',
})
export class AboutSection {
  @Input() aboutTitle = 'About Me';
  @Input() aboutDescription = 'This is a description about me.';
  @Input() aboutParagraph = 'I am a professional photographer with over 10 years of experience in capturing moments that matter. My passion for photography drives me to create stunning visuals that tell a story.';
}
