// https://css-tricks.com/integrating-typescript-with-svelte/
declare module '*.svelte' {
  const value: any;
  export default value;
}
