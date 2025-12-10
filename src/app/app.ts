import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { PhotoSlide } from "./photo-slide/photo-slide";
import { Footer } from "./footer/footer";
import { HeroSection } from "./hero-section/hero-section";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, PhotoSlide, Footer, HeroSection],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ivan-romero-photography');
}
