import { Component, inject, NgZone, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterModule, MatCard, MatCardContent, MatSlideToggle, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-20-shell');
  b: boolean = false;

  constructor() {
    // @ts-ignore
    globalThis.ngZone = inject(NgZone);
  }

  get someBooleanVariable(): boolean {
    return this.b;
  }

  set someBooleanVariable(redirect: boolean) {
    this.b = redirect;
  }
}
