declare const window;
declare const self;

export function getGlobalScope() {
  if (typeof global !== 'undefined') return global;
  if (typeof window !== 'undefined') return window;
  if (typeof self !== 'undefined') return self;
  return;
}