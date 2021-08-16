import _ from 'lodash';

import nodeTypes from './helpers/nodeTypes.js';

const mapper = [
  {
    check: (before, after) => _.isObject(before) && _.isObject(after),
    status: (before, after, build) => ({ children: build(before, after), type: nodeTypes.NESTED }),
  },
  {
    check: (before, after) => !_.isUndefined(before) && _.isUndefined(after),
    status: (before) => ({ oldValue: before, type: nodeTypes.REMOVED }),
  },
  {
    check: (before, after) => _.isUndefined(before) && !_.isUndefined(after),
    status: (before, after) => ({ newValue: after, type: nodeTypes.ADDED }),
  },
  {
    check: (before, after) => !_.isEqual(before, after),
    status: (before, after) => ({ oldValue: before, newValue: after, type: nodeTypes.CHANGED }),
  },
  {
    check: (before, after) => _.isEqual(before, after),
    status: (before) => ({ oldValue: before, type: nodeTypes.UNCHANGED }),
  },
];

function genDiff(before, after) {
  const keys = _.union(Object.keys(before), Object.keys(after)).sort();
  return keys.map((key) => {
    const beforeValue = before[key];
    const afterValue = after[key];

    const { status } = mapper.find(({ check }) => check(beforeValue, afterValue));

    return { key, ...status(beforeValue, afterValue, genDiff) };
  });
}

export default genDiff;
