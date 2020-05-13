import { Stream } from "../../common/Stream";
import { decoderError } from "../../encoding/encodings";
import { finished } from "../../encoding/finished";
import { index } from "../../encoding/indexes";
import { end_of_stream, isASCIIByte } from "../../encoding/terminology";

/**
 * @constructor
 * @implements {Decoder}
 * @param {!Array.<number>} index The encoding index.
 * @param {{fatal: boolean}} options
 */
export class SingleByteDecoder {

  readonly fatal: boolean;

  constructor(index: Array<number>, options: { fatal: boolean; }) {
    this.fatal = options.fatal;
  }

  /**
   * @param {Stream} stream The stream of bytes being decoded.
   * @param {number} bite The next byte read from the stream.
   * @return {?(number|!Array.<number>)} The next code point(s)
   *     decoded, or null if not enough data exists in the input
   *     stream to decode a complete code point.
   */
  handler(stream: Stream, bite: number): (number | Array<number>) | null {
    // 1. If byte is end-of-stream, return finished.
    if (bite === end_of_stream)
      return finished;

    // 2. If byte is an ASCII byte, return a code point whose value
    // is byte.
    if (isASCIIByte(bite))
      return bite;

    // 3. Let code point be the index code point for byte − 0x80 in
    // index single-byte.
    const code_point = index[bite - 0x80];

    // 4. If code point is null, return error.
    if (code_point === null)
      return decoderError(this.fatal);

    // 5. Return a code point whose value is code point.
    return code_point;
  }
}