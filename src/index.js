import path from 'path';
import fs from 'fs';

import parser from './parser.js';
import genDiff from './genDiff.js';
import getFormat from './formatters/index.js';

const getData = (filePath) => {
  const fileData = fs.readFileSync(filePath, 'utf-8');
  const format = path.extname(filePath).slice(1);

  return parser(format)(fileData);
};

function main(filepath1, filepath2, format = 'diff') {
  const first = getData(filepath1);
  const second = getData(filepath2);
  const showByFormat = getFormat(format);
  const diff = genDiff(first, second);

  return showByFormat(diff);
}

export default main;
