export interface WrapperConfig {
  remoteName: string;
  exposedModule: string;
  elementName: string;
}

export const initWrapperConfig: WrapperConfig = {
  remoteName: 'mfe1',
  exposedModule: './web-components',
  elementName: 'mfe-1',
}
