import { Component } from '@angular/core';
import { ServiceBox } from "../service-box/service-box";

@Component({
  selector: 'app-services-section',
  imports: [ServiceBox],
  templateUrl: './services-section.html',
  styleUrl: './services-section.css',
})
export class ServicesSection {
}
