'use strict';

module.exports = function LifeTree() {
  const life = {};

  let alive = true;
  life.alive = () => alive;

  life.throwIfDead = () => {
    if (!alive) {
      throw new Error('throwIfDead() called when dead');
    }
  };

  life.fn = fn => (...args) => {
    life.throwIfDead();
    return fn(...args);
  };

  const children = [];

  const killChildren = () => {
    children.forEach(child => child.kill());
    children.length = 0;
  };

  life.Child = life.fn(() => {
    const child = LifeTree();
    children.push(child);
  });

  life.KillerChild = life.fn(() => {
    killChildren();
    return life.Child();
  });

  life.kill = () => {
    killChildren();
    alive = false;
  };
};
