import { Component, Input, AfterViewInit, ElementRef, viewChild, signal} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-two-pic-anim',
  imports: [NgOptimizedImage,],
  templateUrl: './two-pic-anim.html',
  styleUrl: './two-pic-anim.css',
})
export class TwoPicAnim implements AfterViewInit {
  @Input() image1_src!: string;
  @Input() image2_src!: string;

  trigger = viewChild<ElementRef<HTMLElement>>('trigger');

  inView = signal(false);

  ngAfterViewInit(): void {
    const el = this.trigger()?.nativeElement;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        this.inView.set(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
  }

}
