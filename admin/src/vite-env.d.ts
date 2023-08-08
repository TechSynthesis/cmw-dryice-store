// / <reference types="vite/client" />
declare const __BASE__: string | undefined;
declare const __MEDUSA_BACKEND_URL__: string;

// interface ImportMeta {
//   readonly BACKEND_URL: string;
//   // more env variables...
// }
interface ImportMeta {
  env: Record<string, string>;
}
