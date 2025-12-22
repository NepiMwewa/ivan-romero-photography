import { Component } from '@angular/core';
import { ServiceBox } from "../service-box/service-box";
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-services-section',
  imports: [ServiceBox, NgOptimizedImage],
  templateUrl: './services-section.html',
  styleUrl: './services-section.css',
})
export class ServicesSection {
}
