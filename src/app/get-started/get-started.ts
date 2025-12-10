import { Component } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-get-started',
  standalone: true,
  templateUrl: './get-started.html',
  styleUrl: './get-started.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GetStarted {

}
