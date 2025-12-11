import { Component, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-photo-slide',
  imports: [NgOptimizedImage],
  templateUrl: './photo-slide.html',
  styleUrl: './photo-slide.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoSlide {
  readonly slideCount = 6;
  readonly slideWidth = 300;

  topPhotoIds = signal<number[]>(Array.from({ length: this.slideCount }, () => Math.floor(Math.random() * 1000)));
  bottomPhotoIds = signal<number[]>(Array.from({ length: this.slideCount }, () => Math.floor(Math.random() * 1000)));

  topPhotoUrls = computed(() => {
    const urls = this.topPhotoIds().map(id => `https://picsum.photos/id/${id}/${this.slideWidth}/${this.slideWidth}`);
    return [...urls, ...urls];
  });
  bottomPhotoUrls = computed(() => {
    const urls = this.bottomPhotoIds().map(id => `https://picsum.photos/id/${id}/${this.slideWidth}/${this.slideWidth}`);
    return [...urls, ...urls];
  });

  containerWidth = computed(() => `${this.topPhotoUrls().length * this.slideWidth}px`);
}
