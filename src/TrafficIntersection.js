'use strict';

/* eslint-disable comma-dangle */

const LifeTree = require('./LifeTree');
const range = require('./range');
const TrafficLight = require('./TrafficLight');

module.exports = function TrafficIntersection({ life = LifeTree() } = {}) {
  const intersection = {};

  const lightsLife = life.Child();
  const lights = range(2).map(() => TrafficLight({ life: lightsLife.Child() }));

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
