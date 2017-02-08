'use strict';

const LifeTree = require('./LifeTree');

module.exports = function TrafficLight({ life = LifeTree() } = {}) {
  const light = {};

  let color = 'red'; // red/amber/green
  light.color = () => color;

  let action = {
    type: 'stop',
    promise: Promise.resolve(),
  };

  light.stop = life.fn(() => {
    if (action.type === 'stop') {
      return action.promise;
    }

    const methodLife = life.KillerChild();
    color = 'amber';

    action = {
      type: 'stop',
      promise: delay(2000).then(methodLife.fn(() => {
        color = 'red';
        return delay(2000);
      })),
    };

    return action.promise;
  });

  light.go = life.fn(() => {
    if (action.type === 'go') {
      return action.promise;
    }

    life.KillerChild();
    color = 'green';

    action = {
      type: 'go',
      promise: Promise.resolve(),
    };

    return action.promise;
  });

  return light;
};
