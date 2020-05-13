import { getGlobalScope } from "../helper/getGlobalScope";

export type EncodingIndexMap = {
  [x: string]: number[];
};

declare const encodingIndexes: EncodingIndexMap;
declare const TextEncodingIndexes: { encodingIndexes: EncodingIndexMap };

let _encodingIndexes: EncodingIndexMap;

function checkForEncodingIndexes(): EncodingIndexMap {

  if (typeof TextEncodingIndexes !== 'undefined')
    return TextEncodingIndexes.encodingIndexes;

  const glo = getGlobalScope();

  if (!glo) return null;

  if ('TextEncodingIndexes' in glo)
    return global['TextEncodingIndexes']['encodingIndexes'];

  if ('encoding-indexes' in glo)
    return global['encodingIndexes'];

  return null;
}

export function getEncodingIndexes(): EncodingIndexMap {

  if (_encodingIndexes) {
    return _encodingIndexes;
  }

  const indexes = checkForEncodingIndexes();

  if (!indexes) {
    return null;
  }

  _encodingIndexes = indexes;

  return indexes;
}
