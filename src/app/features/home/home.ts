import { Component } from '@angular/core';
import { AboutSection } from '../../shared/about-section/about-section';
import { HeroSection } from '../../shared/hero-section/hero-section';
import { PhotoSlide } from '../../shared/photo-slide/photo-slide';
import { CtaButton } from "../../core/components/cta-button/cta-button";
import { TwoPicAnim } from "../../shared/two-pic-anim/two-pic-anim";
import { ServicesSection } from '../../shared/services-section/services-section';

@Component({
  selector: 'app-home',
  imports: [AboutSection, HeroSection, PhotoSlide, CtaButton, TwoPicAnim, ServicesSection],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
