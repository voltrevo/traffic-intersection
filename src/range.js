'use strict';

module.exports = function range(n) {
  return (new Array(n)).fill(0).map((x, i) => i);
};
