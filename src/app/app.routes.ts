import { Routes } from '@angular/router';
import { WrapperComponent } from './wrapper/wrapper.component';
import { WrapperConfig } from './wrapper/wrapper-config';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'mfe1',
    component: WrapperComponent,
    data: {
      config: {
        remoteName: 'mfe1',
        exposedModule: './web-components',
        elementName: 'mfe-1',
      } as WrapperConfig,
    },
  },
];
