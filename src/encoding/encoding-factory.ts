// This is free and unencumbered software released into the public domain.
// See LICENSE.md for more information.

import { Big5Decoder, Big5Encoder } from '../coders/big5';
import { EUCJPDecoder, EUCJPEncoder } from '../coders/euc-jp';
import { EUCKRDecoder, EUCKREncoder } from '../coders/euc-kr';
import { GB18030Decoder, GB18030Encoder } from '../coders/gb18030';
import { ISO2022JPDecoder, ISO2022JPEncoder } from '../coders/iso-2022-jp';
import { ShiftJISDecoder, ShiftJISEncoder } from '../coders/shift-jis';
import { SingleByteDecoder, SingleByteEncoder } from '../coders/single-byte';
import { UTF16Decoder, UTF16Encoder } from '../coders/utf-16';
import { UTF8Decoder, UTF8Encoder } from '../coders/utf-8';
import { XUserDefinedDecoder, XUserDefinedEncoder } from '../coders/x-user-defined';
import { Decoder } from '../common/Decoder';
import { Encoder } from '../common/Encoder';
import { encodings } from './encodings';
import { index } from './indexes';
import { getEncodingIndexes } from './encoding-indexes-provider';


//
// Utilities
//

// import './encoding/utilities';

//
// Implementation of Encoding specification
// https://encoding.spec.whatwg.org/
//

//
// 4. Terminology
//

// import './encoding/terminology';

//
// 5. Encodings
//

// import "./encoding/encodings";

//
// 6. Indexes
//

// import './encoding/indexes';

const encodingIndexes = getEncodingIndexes();

//
// 8. API
//

// 8.1 Interface TextDecoder

// 8.2 Interface TextEncoder

//
// 9. The encoding
//

type XCoderFactory<Tncoder = Encoder | Decoder> = ({ fatal: boolean }) => Tncoder;

type Encoders = {
  [s: string]: XCoderFactory<Encoder>;
};

type Decoders = {
  [s: string]: XCoderFactory<Decoder>;
};

// Registry of of encoder/decoder factories, by encoding name.
/** @type {Object.<string, function({fatal:boolean}): Encoder>} */
// const encoders: Encoders = {};

/** @type {Object.<string, function({fatal:boolean}): Decoder>} */
// const decoders: Decoders = {};

  //
  // 10. Legacy single-byte encodings
  //

  // 10.1 single-byte decoder

  // 10.2 single-byte encoder

export const encoders: Encoders = {

  // 9.1 utf-8

  // 9.1.1 utf-8 decoder

  // 9.1.2 utf-8 encoder

  /** @param {{fatal: boolean}} options */
  'UTF-8': (options: { fatal: boolean; }) => new UTF8Encoder(options),

  //
  // 11. Legacy multi-byte Chinese (simplified) encodings
  //

  // 11.1 gbk

  // 11.1.1 gbk decoder
  // gbk's decoder is gb18030's decoder.

  // 11.1.2 gbk encoder
  // gbk's encoder is gb18030's encoder with its gbk flag set.
  /** @param {{fatal: boolean}} options */
  'GBK': (options: { fatal: boolean; }) => new GB18030Encoder(options, true),

  // 11.2 gb18030
  // 11.2.1 gb18030 decoder

  // 11.2.2 gb18030 encoder

  /** @param {{fatal: boolean}} options */
  'gb18030': (options: { fatal: boolean; }) => new GB18030Encoder(options),



  //
  // 12. Legacy multi-byte Chinese (traditional) encodings
  //

  // 12.1 Big5

  // 12.1.1 Big5 decoder

  // 12.1.2 Big5 encoder

  /** @param {{fatal: boolean}} options */
  'Big5': (options: { fatal: boolean; }) => new Big5Encoder(options),


  //
  // 13. Legacy multi-byte Japanese encodings
  //

  // 13.1 euc-jp

  // 13.1.1 euc-jp decoder

  // 13.1.2 euc-jp encoder

  /** @param {{fatal: boolean}} options */
  'EUC-JP': (options: { fatal: boolean; }) => new EUCJPEncoder(options),

  // 13.2 iso-2022-jp

  // 13.2.1 iso-2022-jp decoder

  // 13.2.2 iso-2022-jp encoder

  /** @param {{fatal: boolean}} options */
  'ISO-2022-JP': (options: { fatal: boolean; }) => new ISO2022JPEncoder(options),

  // 13.3 Shift_JIS

  // 13.3.1 Shift_JIS decoder

  // 13.3.2 Shift_JIS encoder

  /** @param {{fatal: boolean}} options */
  'Shift_JIS': (options: { fatal: boolean; }) => new ShiftJISEncoder(options),

  //
  // 14. Legacy multi-byte Korean encodings
  //

  // 14.1 euc-kr

  // 14.1.1 euc-kr decoder

  // 14.1.2 euc-kr encoder

  /** @param {{fatal: boolean}} options */
  'EUC-KR': (options: { fatal: boolean; }) => new EUCKREncoder(options),


  //
  // 15. Legacy miscellaneous encodings
  //

  // 15.1 replacement

  // Not needed - API throws RangeError

  // 15.2 Common infrastructure for utf-16be and utf-16le

  // 15.2.1 shared utf-16 decoder

  // 15.2.2 shared utf-16 encoder

  // 15.3 utf-16be
  // 15.3.1 utf-16be decoder
  /** @param {{fatal: boolean}} options */
  'UTF-16BE': (options: { fatal: boolean; }) => new UTF16Encoder(true, options),
  // 15.3.2 utf-16be encoder

  // 15.4 utf-16le
  // 15.4.1 utf-16le decoder
  /** @param {{fatal: boolean}} options */
  'UTF-16LE': (options: { fatal: boolean; }) => new UTF16Encoder(false, options),
  // 15.4.2 utf-16le encoder

  // 15.5 x-user-defined

  // 15.5.1 x-user-defined decoder

  // 15.5.2 x-user-defined encoder

  /** @param {{fatal: boolean}} options */
  'x-user-defined': (options: { fatal: boolean; }) => new XUserDefinedEncoder(options),
}



export const decoders: Decoders = {
  /** @param {{fatal: boolean}} options */
  'UTF-8': (options: { fatal: boolean; }) => new UTF8Decoder(options),
  /** @param {{fatal: boolean}} options */
  'GBK': (options: { fatal: boolean; }) => new GB18030Decoder(options),
  /** @param {{fatal: boolean}} options */
  'gb18030': (options: { fatal: boolean; }) => new GB18030Decoder(options),
  /** @param {{fatal: boolean}} options */
  'Big5': (options: { fatal: boolean; }) => new Big5Decoder(options),
  /** @param {{fatal: boolean}} options */
  'EUC-JP': (options: { fatal: boolean; }) => new EUCJPDecoder(options),
  /** @param {{fatal: boolean}} options */
  'ISO-2022-JP': (options: { fatal: boolean; }) => new ISO2022JPDecoder(options),
  /** @param {{fatal: boolean}} options */
  'Shift_JIS': (options: { fatal: boolean; }) => new ShiftJISDecoder(options),
  /** @param {{fatal: boolean}} options */
  'EUC-KR': (options: { fatal: boolean; }) => new EUCKRDecoder(options),
  /** @param {{fatal: boolean}} options */
  'UTF-16BE': (options: { fatal: boolean; }) => new UTF16Decoder(true, options),
  /** @param {{fatal: boolean}} options */
  'UTF-16LE': (options: { fatal: boolean; }) => new UTF16Decoder(false, options),
  /** @param {{fatal: boolean}} options */
  'x-user-defined': (options: { fatal: boolean; }) => new XUserDefinedDecoder(options),
}


if (encodingIndexes) {
  encodings.forEach(function (category) {
    if (category.heading !== 'Legacy single-byte encodings')
      return;
    category.encodings.forEach(function (encoding) {
      const name = encoding.name;
      const idx = index(name.toLowerCase());
      /** @param {{fatal: boolean}} options */
      decoders[name] = function (options: { fatal: boolean; }) {
        return new SingleByteDecoder(idx as number[], options);
      };
      /** @param {{fatal: boolean}} options */
      encoders[name] = function (options: { fatal: boolean; }) {
        return new SingleByteEncoder(idx as number[], options);
      };
    });
  });
}