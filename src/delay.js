'use strict';

module.exports = function delay(dt) {
  return new Promise(resolve => setTimeout(resolve, dt));
};
