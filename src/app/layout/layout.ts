import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Layout {

}
