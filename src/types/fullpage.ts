// Interface para o fullpage_api
export interface FullpageApi {
  moveTo: (sectionIndex: number) => void;
  getActiveSection: () => { index: number };
  setAllowScrolling: (allow: boolean) => void;
}

// Estendendo a interface Window para incluir o fullpage_api
declare global {
  interface Window {
    fullpage_api?: FullpageApi;
  }
} 