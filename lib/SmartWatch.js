const extend = require('./helper');
const Watch = require('./Watch');
const Tablet = require('./Tablet');

function SmartWatch(){
  Watch.call(this);
  Tablet.call(this);
}

extend(SmartWatch, Watch);
extend(SmartWatch, Tablet);

module.exports = SmartWatch;