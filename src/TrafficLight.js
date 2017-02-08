'use strict';

const EventEmitter = require('voltrevo-event-emitter');

const delay = require('./delay');
const LifeTree = require('./LifeTree');

module.exports = function TrafficLight({ life = LifeTree() } = {}) {
  const light = {};

  light.events = EventEmitter();

  const setColor = (() => {
    let color = 'red'; // red/amber/green
    light.color = () => color;

    return (newColor) => {
      color = newColor;
      light.events.emit('color-change', newColor);
    };
  })();

  let action = {
    type: 'stop',
    promise: Promise.resolve(),
  };

  light.stop = life.fn(() => {
    if (action.type === 'stop') {
      return action.promise;
    }

    const methodLife = life.KillerChild();
    setColor('amber');

    action = {
      type: 'stop',
      promise: delay(2000).then(methodLife.fn(() => {
        setColor('red');
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
    setColor('green');

    action = {
      type: 'go',
      promise: Promise.resolve(),
    };

    return action.promise;
  });

  return light;
};
