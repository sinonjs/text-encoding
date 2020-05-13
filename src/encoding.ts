import { TextDecoder } from './common/TextDecoder';
import { TextEncoder } from './common/TextEncoder';

declare const window;

// Polyfills browser
if (typeof window !== 'undefined') {
  if (!('TextDecoder' in window)) window['TextDecoder'] = TextDecoder;
  if (!('TextEncoder' in window)) window['TextEncoder'] = TextEncoder;
}

export { TextDecoder, TextEncoder };