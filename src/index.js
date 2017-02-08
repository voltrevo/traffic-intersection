'use strict';

const moment = require('moment');

const TrafficIntersection = require('./TrafficIntersection');

const intersection = TrafficIntersection();
const timestamp = () => moment().format('YYYY-MM-DDTHH:mm:ss.SSSZ');

intersection.events.on('color-change', ({ lightName, newColor }) => {
  console.log(`${timestamp()}: ${lightName} change to ${newColor}`);
});

const changeLoop = () => {
  console.log(`${timestamp()}: change!`);
  intersection.change();

  setTimeout(changeLoop, Math.random() * 10000);
};

setTimeout(changeLoop, 3000);
