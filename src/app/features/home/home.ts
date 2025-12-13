import { Component } from '@angular/core';
import { AboutSection } from '../../shared/about-section/about-section';
import { HeroSection } from '../../shared/hero-section/hero-section';
import { PhotoSlide } from '../../shared/photo-slide/photo-slide';
import { CtaButton } from "../../core/components/cta-button/cta-button";

@Component({
  selector: 'app-home',
  imports: [AboutSection, HeroSection, PhotoSlide, CtaButton],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
