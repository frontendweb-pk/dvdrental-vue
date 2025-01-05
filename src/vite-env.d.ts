/// <reference types="vite/client" />

import type { AppContent } from "./utils/AppContent";

declare module "vue" {
  export interface ComponentCustomProperties {
    $content: typeof AppContent;
  }
}
