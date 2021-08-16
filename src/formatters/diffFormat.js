import nodeTypes from '../helpers/nodeTypes.js';

const TAB = '  ';
const TAB_LEVEL_DEFUALT = 1;

/* eslint-disable no-use-before-define */
const mapper = {
  [nodeTypes.ADDED]: (node, level) => `${TAB.repeat(level)}+ ${node.key}: ${node.newValue}`,
  [nodeTypes.REMOVED]: (node, level) => `${TAB.repeat(level)}- ${node.key}: ${node.oldValue}`,
  [nodeTypes.UNCHANGED]: (node, level) => `${TAB.repeat(level)}  ${node.key}: ${node.oldValue}`,
  [nodeTypes.CHANGED]: (node, level) => `${TAB.repeat(level)}- ${node.key}: ${node.oldValue}\n${TAB.repeat(level)}+ ${node.key}: ${node.newValue}`,
  [nodeTypes.NESTED]: (node, level) => `${TAB.repeat(level)}  ${node.key}: ${diff(node.children, level + 1)}`,
};
/* eslint-enable no-use-before-define */

function diff(data, level) {
  return `{\n${data.map((node) => mapper[node.type](node, level)).join('\n')}\n${TAB.repeat(level - 1)}}`;
}

const diffFormat = (data) => diff(data, TAB_LEVEL_DEFUALT);

export default diffFormat;
