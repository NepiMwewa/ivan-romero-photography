import { Component } from '@angular/core';
import { AboutSection } from '../../shared/about-section/about-section';
import { HeroSection } from './hero-section/hero-section';
import { PhotoSlide } from '../../shared/photo-slide/photo-slide';

@Component({
  selector: 'app-home',
  imports: [AboutSection, HeroSection, PhotoSlide],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
