/// <reference types="vite/client" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace JSX {
  interface Element {}
  interface IntrinsicAttributes {
    [name: string]: any;
  }
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
