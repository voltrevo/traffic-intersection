'use strict';

/* eslint-disable comma-dangle */

const EventEmitter = require('voltrevo-event-emitter');

const LifeTree = require('./LifeTree');
const TrafficLight = require('./TrafficLight');

module.exports = function TrafficIntersection({
  life = LifeTree(),
  lightNames = ['NorthSouth', 'EastWest'],
} = {}) {
  const intersection = {};

  intersection.events = EventEmitter();

  const lightsLife = life.Child();

  const lights = lightNames.map((lightName) => {
    const light = TrafficLight({ life: lightsLife.Child() });

    light.events.on('color-change', (newColor) => {
      intersection.events.emit('color-change', { lightName, newColor });
    });

    return light;
  });

  const methodsLife = life.Child();
  let nextLightIndex = 0;

  intersection.change = life.fn(() => {
    const methodLife = methodsLife.KillerChild();
    const nextLight = lights[nextLightIndex];
    nextLightIndex = (nextLightIndex + 1) % lights.length;

    return Promise
      .all(lights
        .filter(light => light !== nextLight)
        .map(light => light.stop())
      )
      .then(methodLife.fn(() => nextLight.go()))
    ;
  });

  return intersection;
};
