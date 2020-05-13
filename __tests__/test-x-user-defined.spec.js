// This is free and unencumbered software released into the public domain.
// See LICENSE.md for more information.

const {
  assert_equals,
} = require('../util/assert-package.js');

const { TextDecoder, TextEncoder } = require('../lib/encoding');

describe('x-user-defined encoding', () => {
  it('x-user-defined encoding', () => {
    assert_equals(new TextEncoder('x-user-defined').encoding, 'utf-8');

    var decoder = new TextDecoder('x-user-defined');
    for (var i = 0; i < 0x80; ++i) {
      assert_equals(decoder.decode(new Uint8Array([i])), String.fromCharCode(i));
      assert_equals(decoder.decode(new Uint8Array([i + 0x80])), String.fromCharCode(i + 0xF780));
    }
  });
});
