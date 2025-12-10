import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly title = signal('ivan-romero-photography');
}

