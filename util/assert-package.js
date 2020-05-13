const asserts = require('assert');

const assert_equals = asserts.strictEqual;
const assert_not_equals = asserts.notEqual;
const assert_false = (a, msg) => asserts.strictEqual(a, false, msg);
const assert_true = (a, msg) => asserts.strictEqual(a, true, msg);
const assert_throws = (type, func) => expect(func).toThrow(type);
const assert_array_equals = (a, b) =>  () => {
  const aArr = Array.from(a);
  assert_equals(aArr.length, b.length);
  aArr.forEach((aItem, index) => assert_equals(aItem, b[index]));
}

module.exports = {
    assert_equals,
    assert_not_equals,
    assert_false,
    assert_true,
    assert_array_equals,
    assert_throws,
}