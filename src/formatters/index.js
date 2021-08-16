import diffFormat from './diffFormat.js';

const types = {
  diff: diffFormat,
};

export default (format) => types[format];
