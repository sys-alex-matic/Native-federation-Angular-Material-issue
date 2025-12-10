import { Component, ElementRef, inject, Input, OnInit } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { CommonModule } from '@angular/common';
import { initWrapperConfig } from './wrapper-config';

@Component({
  selector: 'app-wrapper',
  imports: [CommonModule],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.scss',
})
export class WrapperComponent implements OnInit {
  elm = inject(ElementRef);

  @Input() config = initWrapperConfig;

  async ngOnInit() {
    const { exposedModule, remoteName, elementName } = this.config;

    await loadRemoteModule(remoteName, exposedModule);
    const root = document.createElement(elementName);
    this.elm.nativeElement.appendChild(root);
  }
}
