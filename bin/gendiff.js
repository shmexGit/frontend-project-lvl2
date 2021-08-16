#!/usr/bin/env node --experimental-json-modules --no-warnings
import program from 'commander';

import genDiff from '../src/index.js';
import config from '../package.json';

program
  .version(config.version)
  .description(config.description)
  .option('-f, --format [type]', 'output format', 'diff')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const options = program.opts();
    console.log(genDiff(filepath1, filepath2, options.format));
  })
  .parse(process.argv);
