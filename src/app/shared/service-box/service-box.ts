import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-service-box',
  imports: [NgOptimizedImage],
  templateUrl: './service-box.html',
  styleUrl: './service-box.css',
})
export class ServiceBox {
  @Input({required: true}) iconPath!: string;
  @Input() iconAlt = 'Service Icon';
  @Input() title = 'Service Title';
  @Input() subTitle = 'Sub Title';
  @Input() description = 'This is a description of the service offered.';
}
